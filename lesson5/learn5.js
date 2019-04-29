'use strict';

let box = document.getElementById('box'), //получение элемента по ID из html дока
    btn = document.getElementsByTagName('button'), //получаем кнопки и создаем из 
    //них псевдомассив
    circ = document.getElementsByClassName('circle'),//получаем коллекцию элем-ов
    //с классом circle
    heart = document.querySelectorAll('.heart'), //преимущества такого получения элементов:
    //обладает свойством вложенности; имеет 1 метод: forEach, перебор всех эл-ов...
    oneHeart = document.querySelector('.heart'), //получает первый такой эл-т на стр
    wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circ[2]);
// console.log(heart[1]);
// console.log(oneHeart);

box.style.backgroundColor = 'cyan';
btn[1].style.borderRadius = '100%';

circ[0].style.backgroundColor = 'red';
circ[1].style.backgroundColor = 'yellow';
circ[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';  
// }
// делаем цикл для измен св-в эл-ов псевдомассива

heart.forEach(function(item, i, hearts) {
  item.style.backgroundColor = 'blue';
});// делаем форич, к нему прикручиваем колбек ф-ю
//в которой 3 пер-х со своими именама(сам элем-т, номер, и массив)
//в реальной жизни исп-ть удобнее, чем цикл

//создание эл-ов
let div  = document.createElement('div'), //создали элемент div
    text = document.createTextNode('Это просто текст....'); //создание текстового узла

div.classList.add('black'); //присвоили класс

// document.body.appendChild(div); // добавляем этот элемент в конец страницы
// этот метод работает только для родительских эл-ов

// wrapper.appendChild(div); //вставлят в конец нашего контейнера


// div.innerHTML = '<h1>hello everybody!</h1>'; //этим методом помещается текст
// // и структура HTMl. 

div.textContent = '<h1>hello everybody!</h1>'; //этим способом помещается
//именно текст, это удобно например для получения инф-ии от пользователя
//т.к. через inner возможно будет передать какой-то код, или даже 
//вредоносный скрипт





document.body.insertBefore(div, circ[1]); //это метод вставляет перед. имеет 2 аргумета
//первый - то, что мы вставляем, второй - перед чем мы вставляем
document.body.removeChild(circ[1]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[3], circ[1]); //метод замены элемента,
//первый аргумент - чем заменяем, второй - что заменям(из первоначального
//места эл-т, кот. заменяем пропадает)

console.log(div);

