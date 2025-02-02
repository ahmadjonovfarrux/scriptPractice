// Array methods
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = [];
// // forEach()
// numbers.forEach((son) => {
//   newNumbers.push(son ** 2);
// });
// console.log(newNumbers);

// Array1. n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
// function getInitialOdds(n) {
//   const newNumbers = [];
//   for (let i = 1; i <= n; i++) {
//     newNumbers.push(2 * i - 1);
//   }
//   return newNumbers;
// }
// const result = getInitialOdds(5);
// console.log(result);

// Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
// let arr = [4, 5, 7, 8, 6, 9];
// let newNumbers = [];
// const getEvenReverse = (arr) => {
//   arr.forEach((son) => {
//     if (son % 2 == 0) {
//       newNumbers.unshift(son);
//     }
//   });
//   return newNumbers;
// };
// const result = getEvenReverse(arr);
// console.log(result);

// Array3. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
// const arr = [4, 5, 7, 8, 6, 9];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i], arr[arr.length - 1 - i]);
// }
// console.log(result.join(" "));

// Array4. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
// const arr = [1, 6, 9, 5, 8, 10, 15];
// function rangeSum(arr, K, L) {
//   let sum = 0;
//   for (let i = K; i <= L; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// const result = rangeSum(arr, 2, 5);
// console.log(result);

// Array5. n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.
const arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
function duplicateNumbers(arr){
    
}
