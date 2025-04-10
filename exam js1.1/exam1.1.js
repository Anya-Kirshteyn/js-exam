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
//
// function isEmptyDeep(value) {
//     if (value === null || value === undefined) {
//         return true;
//     }
//
//     if (typeof value === 'number' && isNaN(value)) {
//         return true;
//     }
//
//     if (typeof value === 'string' && value === '') {
//         return true;
//     }
//
//     if (Array.isArray(value)) {
//         return value.length === 0 || value.every(isEmptyDeep);
//     }
//
//     if (typeof value === 'object') {
//         const values = Object.values(value);
//         return values.length === 0 || values.every(isEmptyDeep);
//     }
//
//     return false;
// }
// console.log(isEmptyDeep([[], null,{a:{b:[{},{c:''}]}}]))
// console.log(isEmptyDeep([[], null,{a:{b:[{},'{}']}}]))












// Basic Login Form с валидацией email/пароля.
//
//     Стек технологий:
//
//     React.js или Angular.js;
//
// Formik;
//
// Любая библиотека для стилей.
//
//     Ссылка на макет:
//     https://www.figma.com/file/0sbQJXtPAATqPYn4euN5KX/
//         React-Playground-%E2%80%93-Sign-Up-Screen-%F0%9F%94%91-(Community)?node-id=447%3A2
