'use strict';

function writeSimpleNumbers() {

  // for (let i = 2; i < 100; i++) {
  //   if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
  //     let div = document.createElement('div');
  //     document.body.appendChild(div);
  //     div.innerHTML = i + " - простое число. Делители этого числа 1 и " + i + '<br>';
  //   } else if (i == 2 || i == 3 || i == 5 || i == 7) {
  //     let div = document.createElement('div');
  //     document.body.appendChild(div);
  //     div.innerHTML = i + " - простое число. Делители этого числа 1 и " + i + '<br>';
  //   }
  // }

  // с помощью меток
  nextPrime:
    for (var i = 2; i <= 100; i++) {
      for (var j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
      let div = document.createElement('div');
          document.body.appendChild(div);
          div.innerHTML = i + " - простое число. Делители этого числа 1 и " + i + '<br>';
    }
}

writeSimpleNumbers();

// решение от Андрея
// for (let i = 1; i <= 100; i++) {
//   let checkNumbers = 0;
//   for (let j = 1; j <= 100; j++) {
//     if (i % j == 0) checkNumbers++;
//     if (checkNumbers > 2) continue;
//   }
//   if (checkNumbers == 2) {
//     let div = document.createElement('div');
//     div.textContent = i;
//     document.body.appendChild(div);
//   }
// }










