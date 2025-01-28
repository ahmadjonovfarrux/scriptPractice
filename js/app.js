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

// if1.
// Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshirilsin, aks holda o`zgartirilmasin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let son = +prompt(`Sonni kiriting`);
// if (son > 0) {
//     console.log(son + 1);
// } else {
//     console.log(son);
// }

// if2.
// Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring. Agar 0 ga teng bo`lsa, 10 ni o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let son = +prompt(`Sonni kiriting`);
// if (son > 0) {
//   console.log((son += 1));
// } else if (son < 0) {
//   console.log((son -= 2));
// } else if (son == 0) {
//   console.log((son += 10));
// } else {
//   console.log("qaytadan urinib koring");
// }

// if3.
// Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.
// let son1 = +prompt(`Birinchi sonni kiriting`);
// let son2 = +prompt(`Ikkinchi sonni kiriting`);
// let son3 = +prompt(`Uchinchi sonni kiriting`);
// let counter = 0;
// let manfiyCounter = 0;
// if (son1 > 0) {
//   counter++;
// } else {
//   manfiyCounter++;
// }
// if (son2 > 0) {
//   counter++;
// } else {
//   manfiyCounter++;
// }
// if (son3 > 0) {
//   counter++;
// } else {
//   manfiyCounter++;
// }
// console.log(`Musbat sonlar soni: ${counter}`);
// console.log(`Manfiy sonlar soni: ${manfiyCounter}`);

// if4. Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programma tuzilsin.
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// if (a > b) {
//   console.log(`${a} soni ${b} sonidan katta`);
// } else {
//   console.log(`${b} soni ${a} sonidan katta`);
// }

// if5. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.
// let a = 4;
// let b = 7;
// if (a > b) {
//   console.log(`${b} sonining tartib raqami ham ${b} ga teng `);
// } else {
//   console.log(`${a} sonining tartib raqami ham ${a} ga teng`);
// }

// if6.
// Ikkita butun son berilgan. Shu sonlarning avval kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin.
// let a = 4;
// let b = 6;
// if (a > b) {
//   console.log(a);
//   console.log(b);
// } else {
//   console.log(b);
//   console.log(a);
// }

// if7.
// A va B haqiqiy sonlari beringan. Shu sonlarni shunday o'zgartirish kerakki, A son kichik B son katta bo`lsin. A va B ning qiymati ekranga chiqarilsin.
// let a = 3;
// let b = 5;
// if (a < b) {
//   console.log(a);
//   console.log(b);
// } else {
//   a = c;
//   b = d;
//   c = b;
//   d = a;
//   console.log(a);
//   console.log(b);
// }

// if8. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B o`zgaruvchilari ularning yig'indisini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.
// let a = 4;
// let b = 3;
// if (a == b) {
//   console.log((a += b));
// } else if (a != b) {
//   console.log(a, b);
// }

// if9. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.
// let a = 8;
// let b = 9;

// if (a != b) {
//   if (a > b) {
//     console.log((a += b), (a += a));
//   } else {
//     console.log((a += b), (b += b));
//   }
// } else if (a == b) {
//   console.log((a += 0), (b += 0));
// }

// if10.
// Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin.
// let a = 3;
// let b = 3;
// let c = 2;
// if (a < b && a < c) {
//   console.log(`${a} eng kichik son`);
// } else if (b < a && b < c) {
//   console.log(`${b} eng kichik son`);
// } else {
//   console.log(`${c} eng kichik son`);
// }

// if11.
// Uchta son berilgan. Shu sonlarni o`ratachasi (ya'ni katta va kichik sonlar orasidagi son) ni aniqlovchi programma tuzilsin.
// let son1 = +prompt(`Birinchi sonni kiriting`);
// let son2 = +prompt(`Ikkinchi sonni kiriting`);
// let son3 = +prompt(`Uchinchi sonni kiriting`);
// if ((son1 > son2 && son1 < son3) || (son1 < son2 && son1 > son3)) {
//   console.log(`${son1} o'rtancha son`);
// } else if ((son2 > son1 && son2 < son3) || (son2 < son1 && son2 > son3)) {
//   console.log(`${son2} o'rtancha son`);
// } else if ((son3 > son1 && son3 < son2) || (son3 < son1 && son3 > son2)) {
//   console.log(`${son3} o'rtancha son`);
// } else {
//   console.log(`Qaytadan urinib ko'ring`);
// }

// if12. Uchta son berilgan. Shu sonlarning yig'indisi eng katta bo'ladigan ikkitasini ekranga chiqaruvchi programma tuzilsin.
// let son1 = 3;
// let son2 = 6;
// let son3 = 6;
// if (son1 + son2 > son1 + son3) {
//   console.log(`${son1} + ${son2} = ${son1 + son2}`);
// }
// if (son2 + son3 > son2 + son1) {
//   console.log(`${son2} + ${son3} = ${son2 + son3}`);
// }
// if (son3 + son1 > son3 + son2) {
//   console.log(`${son3} + ${son1} = ${son3 + son1}`);
// }

// if13
// A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o`sish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// let c = +prompt(`Uchinchi sonni kiriting`);
// if (a <= b && b <= c) {
//   console.log(a * 2);
//   console.log(b * 2);
//   console.log(c * 2);
// } else {
//   console.log(a * -1);
//   console.log(b * -1);
//   console.log(c * -1);
// }

// if14.
// A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o'sish yoki kamayish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.
// let son1 = +prompt(`sonni kiriting`);
// let son2 = +prompt(`sonni kiriting`);
// let son3 = +prompt(`sonni kiriting`);
// if (
//   (son1 == son2 - 1 && son2 == son3 - 1) ||
//   (son1 == son2 + 1 && son2 == son3 + 1)
// ) {
//   console.log(`Berilgan sonlar ketma ketlik tartibida ${son1} ${son2} ${son3}`);
// } else {
//   console.log(`Berilgan sonlar ketma ketlikga amal qilmayabdi`);
// }

// if15.
// To`rtta butun son berilgan. Shu sonlarni uchtasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// let c = +prompt(`Uchinchi sonni kiriting`);
// let d = +prompt(`To'rtinchi sonni kiriting`);
// if (a == b && a == c) {
//   console.log(`${d} sonining tartib raqami ham ${d} ga teng`);
// } else if (a == b && a == d) {
//   console.log(`${c} sonining tartib raqami ham ${c} ga teng`);
// } else if (a == c && a == d) {
//   console.log(`${b} sonining tartib raqami ham ${b} ga teng`);
// } else if (b == c && b == d) {
//   console.log(`${a} sonining tartib raqami ham ${a} ga teng`);
// } else {
//   console.log(`Qaytadan urinib ko'ring`);
// }

// if16. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
// agar x≤ 0 bo’lsa -x;
// agar 0<x<2; x^2
// agar x≥2 bo’lsa 4
// let x = +prompt(`Sonni kiriting`);
// if (x <= 0) {
//   console.log(x * -1);
// } else if (0 < x && x < 2) {
//   console.log(x ** 2);
// } else if (x >= 2) {
//   console.log(4);
// }

// if17. Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.
// let yil = 500;
// let birYil = 365;
// let kabisaYil = 366;
// if (yil % 4 == 0 || yil % 400 == 0) {
//   console.log(`kabisa yili`);
// }
// if (yil / birYil) {
//   console.log(`${yil * birYil} kun bor `);
// } else {
//   console.log(`Qaytadan urinib ko'ring`);
// }

// if18.
// 1-999 oraliqdagi sonlar berilgan. Berilgan sonni "ikki xonali juft son", "uch xonali toq son" va x.k. ekranga yozadigan programma tuzilsin.
// let son = 11;
// if (son > 99 && son % 2 == 0) {
//   console.log(`Uch xonali juft son`);
// } else if (son > 99 && son % 2 != 0) {
//   console.log(`Uch xonali toq son `);
// } else if (son > 9 && son % 2 == 0) {
//   console.log(`Ikki xonali juft son`);
// } else if (son > 9 && son % 2 != 0) {
//   console.log("Ikki xonali toq son");
// } else {
//   console.log(`Qaytatdan urinib ko'ring`);
// }

// Case1.
// K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.
// let k = 3;
// switch (k) {
//   case 1:
//     console.log("Yomon");
//     break;
//   case 2:
//     console.log("Qoniqarsiz");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yahshi");
//     break;
//   case 5:
//     console.log("A'lo");
//     break;
//   default:
//     console.log(`Qaytadan urinib ko'ring`);
// }

// Case2.
// Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")
// let oyRaqami = +prompt(`Raqam kiriting`);
// switch (oyRaqami) {
//   case 1:
//     console.log(`Qish`);
//     break;
//   case 2:
//     console.log(`Qish`);
//     break;
//   case 3:
//     console.log(`Qish`);
//     break;
//   case 4:
//     console.log(`Bahor`);
//     break;
//   case 5:
//     console.log(`Bahor`);
//     break;
//   case 6:
//     console.log(`Bahor`);
//     break;
//   case 7:
//     console.log(`Yoz`);
//     break;
//   case 8:
//     console.log(`Yoz`);
//     break;
//   case 9:
//     console.log(`Yoz`);
//     break;
//   case 10:
//     console.log(`Kuz`);
//     break;
//   case 11:
//     console.log(`Kuz`);
//     break;
//   case 12:
//     console.log(`Kuz`);
//     break;
//   default:
//     console.log(`Qaytadan urunib ko'ring`);
// }

// Case3.
// Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.
// let oyRaqami = 12;
// switch (oyRaqami) {
//   case 1:
//     console.log(`Qishning birinchi oyi 28 kun`);
//     break;
//   case 2:
//     console.log(`Qishning Ikkinchi oyi 31 kun`);
//     break;
//   case 3:
//     console.log(`Qishning uchinchi oyi 30 kun`);
//     break;
//   case 4:
//     console.log(`Qishning to'rtinchi oyi 31 kun`);
//     break;
//   case 5:
//     console.log(`Qishning beshinchi oyi 30 kun`);
//     break;
//   case 6:
//     console.log(`Qishning oltinchi oyi 31 kun`);
//     break;
//   case 7:
//     console.log(`Qishning yetinchi oyi 30 kun`);
//     break;
//   case 8:
//     console.log(`Qishning sakizinchi oyi 31 kun`);
//     break;
//   case 9:
//     console.log(`Qishning to'qqizinchi oyi 30 kun`);
//     break;
//   case 10:
//     console.log(`Qishning o'ninchi oyi 31 kun`);
//     break;
//   case 11:
//     console.log(`Qishning o'n birinch oyi 30 kun`);
//     break;
//   case 12:
//     console.log(`Qishning o'n ikkinchi oyi 31 kun`);
//     break;
//   default:
//     console.log(`Qaytadan urunib ko'ring`);
// }

// Case4.
// Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr, 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalofchi programma tuzilsin.

// let lineInform = +prompt(
//   `Kiritilgan uzunlikning o'lchov birligini kiriting 1-dm 2-km 3-met 4-mm 5-dantimetr`
// );
// let son = +prompt(`Uzunlikni kiriting`);
// switch (lineInform) {
//   case 1:
//     console.log(`${son} dm = ${son / 10} metr`);
//     break;
//   case 2:
//     console.log(`${son} km = ${son * 1000} metr`);
//     break;
//   case 3:
//     console.log(`${son} metr = ${son} metr`);
//     break;
//   case 4:
//     console.log(`${son} mm = ${son / 1000} metr`);
//     break;
//   case 5:
//     console.log(`${son} santimetr = ${son / 100}`);
// }

// Case5. Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu birlikdagi og`irlik qiymati berilgan. Og`irlikni kilogramda ifodalofchi programma tuzilsin.
// let weightInform = +prompt(
//   `Vazn birligini tanlang 1-kg 2-milligram 3-gram 4-ton 5-sentnor`
// );
// let son = +prompt(`Vaznni kiriting`);
// switch (weightInform) {
//   case 1:
//     console.log(`${son} kg = ${son} kg`);
//     break;
//   case 2:
//     console.log(`${son} milligram = ${son * 0.000001} kg`);
//     break;
//   case 3:
//     console.log(`${son} gram = ${son * 0.001} kg`);
//     break;
//   case 4:
//     console.log(`${son}ton = ${son * 1000} kg`);
//     break;
//   case 5:
//     console.log(`${son} sentner = ${son * 100} kg`);
// }

// Case6.
// Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin. Kabisa yilida 366 kun, kabisa bo'lmagan yilda 365 kun bor bo'ladi.
// let d = +prompt(`Nechinchi kun?`);
// let m = +prompt(`Nechinchi oy?`);
// let year = 365;
// switch ((d, m)) {
//   case 1:
//     if (d > 30) {
//       console.log(`${d}-kun Fevral`);
//     } else {
//       console.log(`${d}-kun Yanvar`);
//     }
//     break;
//   case 2:
//     if (d > 28) {
//       console.log(`${d - 28}-kun Mart`);
//     } else {
//       console.log(`${d}-kun Fevral`);
//     }
//     break;
//   case 3:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Aprel`);
//     } else {
//       console.log(`${d}-kun Mart`);
//     }
//     break;
//   case 4:
//     if (d > 30) {
//       console.log(`${d - 30}-kun May`);
//     } else {
//       console.log(`${d}-kun Aprel`);
//     }
//     break;
//   case 5:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Iyun`);
//     } else {
//       console.log(`${d}-kun May`);
//     }
//     break;
//   case 6:
//     if (d > 30) {
//       console.log(`${d - 30}-kun Iyul`);
//     } else {
//       console.log(`${d}-kun Iyun`);
//     }
//     break;
//   case 7:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Avgust`);
//     } else {
//       console.log(`${d}-kun Iyul`);
//     }
//     break;
//   case 8:
//     if (d > 30) {
//       console.log(`${d - 30}-kun Sentabr`);
//     } else {
//       console.log(`${d}-kun Avgust`);
//     }

//     break;
//   case 9:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Oktabr`);
//     } else {
//       console.log(`${d}-kun Sentabr`);
//     }

//     break;
//   case 10:
//     if (d > 30) {
//       console.log(`${d - 30}-kun Noyabr`);
//     } else {
//       console.log(`${d}-kun Oktabr`);
//     }
//     break;
//   case 11:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Dekabr`);
//     } else {
//       console.log(`${d}-kun Noyabr`);
//     }
//     break;
//   case 12:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Yanvar`);
//     } else {
//       console.log(`${d}-kun Dekabr`);
//     }
//     break;
// }

// Case7. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.

// let d = 31;
// let m = 3;
// let year = 365;
// switch ((d, m)) {
//   case 1:
//     if (d > 30) {
//       console.log(`${d}-kun Fevral`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}-kun Yanvar`);
//     }
//     break;
//   case 2:
//     if (d > 28) {
//       console.log(`${d - 28}-kun Mart`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}kun Fevral`);
//     }
//     break;
//   case 3:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Aprel`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}-kun Mart`);
//     }
//     break;
//   case 4:
//     if (d > 30) {
//       console.log(`${d - 30}-kun May`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}-kun Aprel`);
//     }
//     break;
//   case 5:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Iyun`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}-kun May`);
//     }
//     break;
//   case 6:
//     if (d > 30) {
//       console.log(`${d - 30}-kun Iyul`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}-kun Iyun`);
//     }
//     break;
//   case 7:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Avgust`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}-kun Iyul`);
//     }
//     break;
//   case 8:
//     if (d > 30) {
//       console.log(`${d - 30}-kun Sentabr`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}-kun Avgust`);
//     }

//     break;
//   case 9:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Oktabr`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}-kun Sentabr`);
//     }

//     break;
//   case 10:
//     if (d > 30) {
//       console.log(`${d - 30}-kun Noyabr`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}-kun Oktabr`);
//     }
//     break;
//   case 11:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Dekabr`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}-kun Noyabr`);
//     }
//     break;
//   case 12:
//     if (d > 31) {
//       console.log(`${d - 31}-kun Yanvar`);
//     } else {
//       console.log(`${d} dan keyingi sana ${d + 1}-kun Dekabr`);
//     }
//     break;
//   default:
//     console.log(`Qaytadan urinib ko'ring`);
// }

// Case12.
// Sharq kalendarida 60 yillik davr qabul qilingan. Yil muchali 5 ta rang (yashil, qizil, sariq, oq va qora) va 12 ta hayvon (sichqon, sigir, yo'lbars, quyon, ajdar, ilon, ot, qo`y, maymun, tovuq, it va to’ngizlardan) nomlarining kombinatsiyasidan kelib chiqadi. Yilning raqamiga qarab uning muchalini aniqlovchi programma tuzilsin. 1984-davr boshi: "Yashil sichqon yili".

// let year = 2025 - 1984;
// let colorNumber = year % 5;
// let animalYear = year % 12;
// switch (colorNumber) {
//   case 0:
//     console.log(`Qora`);
//     break;
//   case 1:
//     console.log(`Yashil`);
//     break;
//   case 2:
//     console.log(`Qizil`);
//     break;
//   case 3:
//     console.log(`Sariq`);
//     break;
//   case 4:
//     console.log(`Oq`);
//     break;
// }

// switch (animalYear) {
//   case 0:
//     console.log(`To'ng'iz`);
//     break;
//   case 1:
//     console.log(`Sichqon`);
//     break;
//   case 2:
//     console.log(`Sigir`);
//     break;
//   case 3:
//     console.log(`Yo'lbars`);
//     break;
//   case 4:
//     console.log(`Quyon`);
//     break;
//   case 5:
//     console.log(`Baliq`);
//     break;
//   case 6:
//     console.log(`Ilon`);
//     break;
//   case 7:
//     console.log(`Ot`);
//     break;
//   case 8:
//     console.log(`Qo'y`);
//     break;
//   case 9:
//     console.log(`Maymun`);
//     break;
//   case 10:
//     console.log(`Tovuq`);
//     break;
//   case 11:
//     console.log(`Kuchuk`);
//     break;
//   // case 12:
//   // console.log(`maymun`);
//   // break;
// }


