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
// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// function getSingleArr(arr) {
//   const result = [];

//   arr.forEach((item) => {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   });
//   return result;
// }
// const natija = getSingleArr(arr);
// console.log(natija);

// Array6. n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.

// let arr = [7, 4, 9, 2, 3, 1, 5];
// let max = arr[0];
// let min = arr[4];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(max, min);

// second way
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// Array7. n ta elementdan tashkil topgan berilgan. Massiv elementlarini 1 ta o'rin ongga siklik siljituvchi programma tuzilsin. a[0] element qiymati a[1] ga o'tadi, a[1] esa a[2] ga, ..., a[n – 1] qiymati a[0] ga o'tadi.
// let arr = [1, 5, 8, 9, 10];
// function reverseNumber(arr) {
//   let result = [];
//   for (let i = 1; i < arr.length; i++) {
//     result.push(arr[i]);
//   }
//   result.push(arr[0]);
//   return result;
// }
// const result = reverseNumber(arr);
// console.log(result);

// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// function getLevel2(n) {
//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(2 ** i);
//   }
//   return result;
// }
// const natija = getLevel2(5);
// console.log(natija);

// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// const newNumbers = [];
// function addingEachNumber(n, A, B) {
//   let number = 0;
//   if (n > A && A < B) {
//     if (n > B && B > A) {
//       newNumbers.push(A, B, n);
//     }
//   }
//   for (let i = 1; i < 3; i++) {
//     newNumbers.push((number += A + B + n));
//   }

//   return newNumbers;
// }
// const result = addingEachNumber(5, 2, 3);
// console.log(result);

// let n = 5;
// let a = 2;
// let b = 3;
// const arr = [a, b];
// let sum = arr[0] + arr[1];

// for (let i = 0; i < n - 2; i++) {
//   arr.push(sum);
//   sum = sum + sum;
// }
// console.log(arr);

// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// let arr = [4, 5, 7, 8, 6, 9];
// function tubSonlar(arr) {
//   const result = [];
//   arr.forEach((son) => {
//     if (son % 2 != 0) {
//       result.push(son);
//     }
//   });
//   return result;
// }
// const result = tubSonlar(arr);
// console.log(result);

// Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.
// let arr = [1, 3, 2, 4, 1, 5, 2];
// let result = [];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
//     result.push(arr[i]);
//   }
// }
// console.log(arr.lastIndexOf(result.at(-1)));

// Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.

// Array24. n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.
const arr = [1, 2, 3, 4, 5];
const result = arr.map((n, i) => {
  if (i == 0) {
    return n;
  } else if (i == 4) {
    return n;
  } else {
    return 0;
  }
});
console.log(result);
