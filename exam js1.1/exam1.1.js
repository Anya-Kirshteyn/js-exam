// Unique. Написать функцию, которая удаляет повторяющиеся значения.
//     Ожидаемый результат: Массив без дубликатов [1, 2, 3, 1, 2] => [1, 2, 3].
//
// unique=(array)=>{
//     let fixed=[]
//     for (let item of array){
//         if (!fixed.includes(item)){
//             fixed.push(item)
//         }
//     }
//
//     return console.log(fixed)
// }
//
// unique([1, 2, 3, 1, 2])



// Intersection. Написать функцию, которая создает массив уникальных значений, присутствующих во всех переданных массивах.
//     Ожидаемый результат: ([1, 2], [2, 3]) => [2].
//
// intersection = (...arrays) => {
//     const withDuplicates = arrays.reduce((acc, currentArray) => {
//         const currentSet = new Set(currentArray);
//         return acc.filter(item => currentSet.has(item));
//     });
// const uniqueValues = new Set(withDuplicates);
//
// return [...uniqueValues];
// };
// console.log(intersection([1, 2, 2], [2, 3], [0, 2]))


// IsEmptyDeep. Написать функцию, которая выполняет глубокую проверку объекта на пустоту.
//     Пустые значения: "", null, NaN, undefined, [].
//     Ожидаемый результат: ({}) => true, ({ a: { b: undefined } }) => true, ({ a: { b: [] } }) => true.



