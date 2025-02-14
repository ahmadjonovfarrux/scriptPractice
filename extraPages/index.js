const divWrapper = document.createElement("div");
divWrapper.setAttribute("class", "newCard");
// Img class
const img = document.createElement("img");
img.setAttribute("class", "newCard__img");
img.src = "../images/newCardImage.png";
// title
const title = document.createElement("h3");
title.setAttribute("class", "newCard__title");
title.textContent = "Jessica Randall";
// subtitle
const subtitle = document.createElement("h5");
subtitle.setAttribute("class", "newCard__subtitle");
subtitle.textContent = "London, United Kingdom";
// text description
const text = document.createElement("p");
text.setAttribute("class", "newCard__text");
text.textContent = "Front-end developer and avid reader";
// ul
const ul = document.createElement("ul");
ul.setAttribute("class", "newCard__list");
// for loop for li
const linksText = [
  "GitHub",
  "Frontend Mentor",
  " LinkedIn",
  " Twitter",
  "Instagram",
];
for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  li.setAttribute("class", "newCard__item");
  const link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("class", "newCard__link")
  link.textContent = linksText[i];
  li.appendChild(link);
  ul.appendChild(li);
}
console.log(ul);
divWrapper.append(img, title, subtitle, text, ul);
const body = document.body;
body.appendChild(divWrapper);
