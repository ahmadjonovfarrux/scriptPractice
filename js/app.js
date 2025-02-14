// Dom mavzusi
// Dinamik - O'zgaruvchan
//  Dom Document Object Model
// document bu html dagi barcha narsa yani tree structure dagi ildiz hisoblanadi
// Html dagi har bir detal bu node

// getElementsByTagName() - bu method
// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// hasAttribute bu true/false qaytaradi va bu attribute bormi yoki yo'q ekanligini tekshiradi
// getAttribute attributeni olish uchun
// setAttribute attriubte qo'shish uchun
// const title = document.createElement("h1");
// title.textContent = "Hello my friend";
// title.setAttribute("class", "title");
// const body = document.body;
// body.appendChild(title);
// console.log(title);

// Amalyot
const divWrapper = document.createElement("div");
divWrapper.setAttribute("class", "card");
const avatarImage = document.createElement("img");
avatarImage.setAttribute("class", "card__img");
avatarImage.src = "./images/blogimage.png";

const button = document.createElement("button");
button.textContent = "Learning";
button.setAttribute("class", "card__btn");

const text = document.createElement("p");
text.textContent = "Published 21 Dec 2023";
text.setAttribute("class", "subtitle");

const title = document.createElement("h3");
title.textContent = "HTML & CSS foundations";
title.setAttribute("class", "card__title");

const description = document.createElement("p");
description.textContent =
  "These languages are the backbone of every website, defining structure, content, and presentation.";
description.setAttribute("class", "card__text");
const imgBox = document.createElement("div");
imgBox.setAttribute("class", "card__imgBox");
const imgOfBox = document.createElement("img");
imgOfBox.src = "./images/userpic.svg";
imgOfBox.setAttribute("class", "imgOfBox");
const h4 = document.createElement("h4");
h4.setAttribute("class", "imgBox__title");
h4.textContent = "Greg Hooper";
imgBox.append(imgOfBox, h4);

divWrapper.append(avatarImage, button, text, title, description, imgBox);
document.body.appendChild(divWrapper);
