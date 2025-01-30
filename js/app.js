// Function va arraylarga masalalar
// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument ikkinchi argumentdan katta emas. Agar birinchi argumentni ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false
// function bolinuvchi(x, y) {
//   if (y % x == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(bolinuvchi(3, 4));

// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib bersin.
// function stringNumber(son) {
//   return Number(son);
// }
// console.log(stringNumber("23"));

// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang. Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak) tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak, agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.
// function findingboxy(x, y) {
//   if (x > 0 && y > 0) {
//     return x * y;
//   } else {
//     return -1;
//   }
// }
// console.log(findingboxy(1, 4));

// 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya “ism, familiya” formatdagi string qaytarsin.
// function ismFamilya(ism, familya) {
//   return (ism += familya);
// }
// console.log(ismFamilya("Farrux ", "Ahmadjonov"));

// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument qabul qiladi. Birinchi argument massive, ikkinchi argument ushbu massivni boshidan boshlab nechta elementni tushurib qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani qaytarsin.
// function tushirMassiv(arr, tushurishSoni) {
//   return arr.slice(tushurishSoni);
// }
// console.log(tushirMassiv([1, 2, 3], 1));
// console.log(tushirMassiv([1, 2, 3, 4, 5], 5));

// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya natijani qaytarsin.
// function voiceCompare(upVoice, downVoice) {
//   if (upVoice > downVoice) {
//     return (upVoice -= downVoice);
//   } else if (upVoice < downVoice) {
//     return (upVoice -= downVoice);
//   } else if (upVoice == downVoice) {
//     return 0;
//   }
// }
// console.log(voiceCompare(2, 2));

// 48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.
// function teskariSon(son) {
//   return son * -1;
// }
// console.log(teskariSon(0));

// 49.Massivni elementlarini o’rnin almashtiradigan funksiya yasang. Reverse metodi siz ham urinib ko’ring.
// let secondOne = [];
// function almash(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     secondOne.push(i);
//   }
//   return secondOne;
// }
// console.log(almash([1, 2, 3, 4, 5]));

// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa funksiya true qaytarsin aks holda false.
// function theatre(yosh, kimBilan) {
//   if (yosh >= 15 && kimBilan == true) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(theatre(15, true));

// !
// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri yasang.
// function addingOne(arr) {
//   for (let i = arr[0]; i <= arr.length; i++) {
//     arr[i];
//   }
//   return arr;
// }
// console.log(addingOne([1, 2, 3, 4]));

//  52.Template string yordamida ya’ni backticlar orqali  `` ushbu formatdagi stringni hosil qiling.
// let name = "Farrux ";
// let sureName = "Ahmadjonov";
// let result = (name += sureName);
// console.log(result);

// 53.Quyidagi namunani ternary operator ko’rinishida yozing.
// let son1 = 2;
// let son2 = 2;
// if (son1 === son2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let holati = "Yaxshi";
// if (holati.toLowerCase() == "yaxshi") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi. juft bo’lsa funksiya true qaytarsin, aks holda false
// function stringCompare(stringArg) {
//   if (stringArg.length % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(stringCompare("yes"));

// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni qaytarsin.
// function darajaliSonlar(son1, son2) {
//   return son1 ** son2;
// }
// console.log(darajaliSonlar(3, 3));

// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning so’nggi elementini qaytarib bersin.
// function lastElement(arr) {
//   return arr.at(-1);
// }
// console.log(lastElement([1, 2, 3, 4]));

//  57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda 400ga ham bo’linganidagina kabisa hisoblanadi.
// function kabisaYil(son) {
//   if (son % 4 == 0 || (son % 100 == 0 && son % 400 == 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(kabisaYil(2021));

// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi harfisiz qaytarib bersin.
// function soz(word) {
//   return word.slice(1);
// }
// console.log(soz("hello"));

// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya yasang.
// function teskariBoolean(bool){
//   if(bool == true){
//     return false;
//   } else{
//     return true;
//   }
// }
// console.log(teskariBoolean(false))

// 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft” qaytaradi, agar toq bo’lsa “toq” qaytarsin.
// function compare(son) {
//   if (son % 2 == 0) {
//     return "juft";
//   } else {
//     return "to'q";
//   }
// }
// console.log(compare(3));

// let hex = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function makingColor() {
//   let stringColor = "#";
//   for (let i = 0; i < 6; i++) {
//     stringColor += hex[Math.floor(Math.random() * hex.length)];
//   }
//   return stringColor;
// }

// let bgColor = `linear-gradient(${makingColor()}, ${makingColor()})`;
// document.body.style = `
// background:${bgColor};
// background-repeat:no-repeat;
// background-size:cover;
// height:100vh;
// `;
