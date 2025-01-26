// if1.
// Butun son berilgan. Agar berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let son = +prompt(`Son kiriting`);
// if (son > 0) {
//   console.log((son += 1));
// } else {
//   console.log((son -= 2));
// }

// if2.
// Uchta butun son berilgan. Shu sonlar orasidan nechta musbat va manfiy son borligini aniqlovchi programma tuzilsin.
// let a = prompt(`Birinchi sonni kiriting`);
// let b = prompt(`Ikkinchi sonni kiriting`);
// let c = prompt(`Uchinchi sonni kiriting`);
// let counter = 0;
// let manfiyCounter = 0;
// if (a > 0) {
//   counter++;
// } else {
//   manfiyCounter++;
// }
// if (b > 0) {
//   counter++;
// } else {
//   manfiyCounter++;
// }
// if (c > 0) {
//   counter++;
// } else {
//   manfiyCounter++;
// }
// console.log(`Musbat sonlar: ${counter}`);
// console.log(`Manfiy sonlar: ${manfiyCounter}`);

// if3.
// Uchta son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga chiqaruvchi programma tuzilsin.
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// let c = +prompt(`Uchinchi sonni kiriting`);
// if (a > b && a > c) {
//   console.log(a);
//   if (b >= c) {
//     console.log(b);
//     console.log(c);
//   } else {
//     console.log(c);
//     console.log(b);
//   }
// } else if (b > a && b > c) {
//   console.log(b);
//   if (a >= c) {
//     console.log(a);
//     console.log(c);
//   } else {
//     console.log(c);
//     console.log(a);
//   }
// } else if (c > a && c > b) {
//   console.log(c);
//   if (b >= a) {
//     console.log(b);
//     console.log(a);
//   } else {
//     console.log(a);
//     console.log(b);
//   }
// } else {
//   console.log(`qaytadan urinib ko'ring`);
// }

// if4.
// Uchta butun son berilgan. Shu sonlarni ikkitasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.

// let son1 = +prompt(`Birinchi sonni kiriting`);
// let son2 = +prompt(`Ikkinchi sonni kiriting`);
// let son3 = +prompt(`Uchinchi sonni kiriting`);
// if (son1 == son2) {
//   console.log(`Berilgan son tartib raqami ${son3}`);
// } else if (son1 == son3) {
//   console.log(`Berilgan son tartib raqami ${son2}`);
// } else {
//   console.log(`Berilgan son tartib raqami ${son1}`);
// }

// if5. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
// agar x < -2 yoki x > 2 bo’lsa 2 * x
// aks holda -3 * x;
// let x = +prompt(`Sonni kiriting`);
// if (x < -2 || x > 2) {
//   console.log(x * 2);
// } else {
//   console.log(-3 * x);
// }

// if6.
// Butun son berilgan. Berilgan sonni "musbat toq", "musbat juft", "nol", “manfiy juft”, “manfiy toq” ekranga yozadigan programma tuzilsin.
// let son = +prompt(`Son kiriting`);
// if (son > 0 && son % 2 != 0) {
//   console.log(`berilgan son musbat toq ${son}`);
// } else if (son > 0 && son % 2 == 0) {
//   console.log(`Berilgan son musbat juft ${son}`);
// } else if (son == 0) {
//   console.log(`Berilgan son nolga teng ${son}`);
// } else if (son < 0 && son % 2 == 0) {
//   console.log(`Berilgan son manfiy just ${son}`);
// } else if (son < 0 && son % 2 != 0) {
//   console.log(`Berilgan son manfiy toq ${son}`);
// } else {
//   console.log(`Qaytadan urinib ko'ring`);
// }

// Case1.
// 1-7 gacha bo'lgan butun sonlar berilgan. Kiritilgan songa mos ravishda hafta kunlarini so'zda ifodalovchi programma tuzilsin. (1-Dushanba, 2-Seshanba,...h.k)
// let xaftaKun = +prompt(`1 dan 7 gacha bo'lgan sonlarni kiriting`);
// switch (xaftaKun) {
//   case 1:
//     console.log(`Dushanba`);
//     break;
//   case 2:
//     console.log(`Seshanba`);
//     break;
//   case 3:
//     console.log(`Chorshanba`);
//     break;
//   case 4:
//     console.log(`Payshanba`);
//     break;
//   case 5:
//     console.log(`Juma`);
//     break;
//   case 6:
//     console.log(`Shanba`);
//     break;
//   case 7:
//     console.log(`Yakshanba`);
//     break;
//   default:
//     console.log(
//       `1 dan 7 gacha bo'lgan sonlarni kiriting. Qaytadan urinib ko'ring`
//     );
// }

// Case2.
// A, B haqiqiy va amal butun soni berilgan. A va B sonlari ustida arifmetik amallar bajaruvchi programma tuzilsin. Amal quyidagi qiymatlarni qabul qiladi: 1-qo`shish, 2-ayirish, 3-bo`lish, 4- ko`paytirish.
// let a = +prompt(`Birinchi sonnni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// let amalQiluvchi = +prompt(`1 dan 4 gacha bo'lgan amallar sonini kiriting`);
// switch (amalQiluvchi) {
//   case 1:
//     console.log((a += b));
//     break;
//   case 2:
//     console.log((a -= b));
//     break;
//   case 3:
//     console.log(a / b);
//     break;
//   case 4:
//     console.log(a * b);
//     break;
//   default:
//     console.log(`Iltimos qaytadan urinib ko'ring`);
// }

// Case3.
// Yoshni yillarda aniqlovchi 20-69 gacha butun son berilgan. Kiritilgan sonni so`zlarda ifodalovchi programma tuzilsin. ("yigirma yosh", "qirq uch yosh❞ va h.k.)
// let yosh = 24;
// switch (yosh) {
//   case 20:
//     console.log("Yigirma yosh");
//     break;
//   case 21:
//     console.log("Yigirma bir yosh");
//     break;
//   case 22:
//     console.log("Yigirma ikki yosh");
//     break;
//   case 23:
//     console.log("Yigirma uch yosh");
//     break;
//   case 24:
//     console.log("Yigirma turt yosh");
//     break;
//   case 25:
//     console.log(`Yigirma besh yosh`);
//     break;
// }
