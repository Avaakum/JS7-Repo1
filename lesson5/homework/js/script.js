'use strict';

let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    headline = document.querySelector('#title'),
    advert  = document.querySelector('.adv'),
    columns = document.querySelectorAll('.column'),
    answer  = document.querySelector('#prompt');



menu.insertBefore(menuItem[2], menuItem[1]);


function itemAppend(element, elemClass, elemText) {
  let menuItemAdd = document.createElement(element);
  menuItemAdd.classList.add(elemClass);
  menuItemAdd.textContent = elemText;
  menu.appendChild(menuItemAdd);
}
itemAppend('li', 'menu-item', 'Пятый пункт');

function bgImageChange(source) {
document.body.style.backgroundImage = source;
}
bgImageChange('url(img/apple_true.jpg)');

function headlineWordAdd(str, number, word) {
  let arr = str.textContent.split(" ");
  arr.splice(number, 0, word);
  let result = arr.join(" ");
  str.textContent = result; 
}
headlineWordAdd(headline, 12, 'подлинную');

function deleteChild(parent, child) {
  parent.removeChild(child);
}
deleteChild(columns[1], advert);

function askUser(question, destination) {
  let ans = prompt(question, '');
  destination.textContent = ans;
}
askUser('Как вы относитесь к технике Apple?', answer);

