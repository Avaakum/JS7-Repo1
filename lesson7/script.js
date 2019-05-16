setTimeout(sayHello, 3000);
// в скобках название функции, адержка в милисекундах, и далее аргументы
// из этой функиии. Не работаест IE9-

// let timerId = setTimeout(sayHello, 3000);
// таким образом мы записываем в переменную числовой идентификатор
// этого таймера

// clearTimeout(timerId);
// // для остановки действия таймера используется
// // например, если пользователь уже сделал какое-то действие - отменяет 
// // таймаут...

// let timerId = setInterval(sayHello, 1000);
// //применяется для выставления интервала, чтобы функция выполнялась 
// //каждый раз через интервал
// clearTimeout(timerId);
// //работает также, как с сеттаймаут


function sayHello() {
  console.log("Привет");
}


let timerId = setTimeout(function log() {
  console.log("hello!");
  setTimeout(log, 2000);
});
//для учета времени выполнения функции и использования
//и вызова ее через интервал используется "рекурсивный вызов setTimeout"


//анимация в JS
//например для анимации
let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnim() {
  let pos = 0,

      id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

// btn.addEventListener('click', myAnim);


//изучаем делегирование
//берем эл-т(родитель) и назначаем ф-ю для его потомков
//если они подходят под определенные параметры

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

//обработчик вешается именно на родителя!!
btnBlock.addEventListener('click', function (event) {
  let target = event.target;
  // if (target && target.tagName == 'BUTTON') { //обяз пишется верхним регистром
  // if (target && target.classList.contains('first')) {
  if (target && target.matches('button.first')) { //в google любят такую конструкцию
    //условие должно быть именно таким, т.к. 
    //мы проверяем на цель события и проверяем, что цель(потомок)
    // содержит тег button(под наше условие(на класс, на потомков итд...))
    console.log("Hello");
  }
});
