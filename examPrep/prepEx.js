
let rates = { USD: 0, EUR: 0 };

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(response => response.json())
    .then(data => {

        rates.USD = data.find(currency => currency.cc === 'USD').rate;
        rates.EUR = data.find(currency => currency.cc === 'EUR').rate;

        document.getElementById('exchange-rates').innerHTML = `
      USD: ${rates.USD.toFixed(2)} UAH | EUR: ${rates.EUR.toFixed(2)} UAH
    `;

        initConverter();
    })
    .catch(error => {
        console.error('Ошибка загрузки курсов:', error);
        document.getElementById('exchange-rates').textContent = 'Курсы недоступны';
    });

function convert(amount, from, to) {
    if (from === to) return amount;

    let inUAH = amount;
    if (from === 'USD') inUAH = amount * rates.USD;
    if (from === 'EUR') inUAH = amount * rates.EUR;

    if (to === 'USD') return inUAH / rates.USD;
    if (to === 'EUR') return inUAH / rates.EUR;
    return inUAH;
}

function initConverter() {
    const amount1 = document.getElementById('amount-1');
    const currency1 = document.getElementById('currency-1');
    const amount2 = document.getElementById('amount-2');
    const currency2 = document.getElementById('currency-2');

    function updateRight() {
        const value = parseFloat(amount1.value) || 0;
        const result = convert(value, currency1.value, currency2.value);
        amount2.value = result.toFixed(2);
    }

    function updateLeft() {
        const value = parseFloat(amount2.value) || 0;
        const result = convert(value, currency2.value, currency1.value);
        amount1.value = result.toFixed(2);
    }

    amount1.addEventListener('input', updateRight);
    currency1.addEventListener('change', updateRight);
    amount2.addEventListener('input', updateLeft);
    currency2.addEventListener('change', updateLeft);

    updateRight();
}


// intersection = (...arrays) => {
//     let result = [];
//     let arr1 = arrays[0];
//
//     for(let i = 0; i < arr1.length; i++) {
//         let num = arr1[i];
//         let inAll = true;
//
//         for (let j = 1; j < arrays.length; j++) {
//             if(!arrays[j].includes(num)) {
//                 inAll = false;
//                 break;
//             }
//         }
//
//         if(inAll && !result.includes(num)) {
//             result.push(num);
//         }
//     }
//
//     return result;
// }
//
// console.log(intersection([1, 2, 2], [2, 3], [0, 2]));