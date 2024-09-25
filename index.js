//2 & 3
const myLi = document.querySelector("li.start-here");
myLi.textContent = "main title";

// 4
const myLiNextElementSibling = myLi.nextElementSibling;
const myUL = myLiNextElementSibling.firstElementChild;
const newSubTitle = document.createElement("li");
const subTitleText = document.createTextNode("sub title 4");
newSubTitle.appendChild(subTitleText);
myUL.appendChild(newSubTitle);

//5
const myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();

//6
const head = document.querySelector("head");
const title = head.lastElementChild;
title.textContent = "DOM Master";

//7
const myDiv = myLiParent.nextElementSibling;
const myP = myDiv.firstChild;
myP.textContent = "Now I know how to traverse the DOM :D";
