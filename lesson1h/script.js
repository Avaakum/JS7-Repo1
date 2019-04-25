'use strict';

let num = 33721,
    x = 1;

// num = String(num);
num = num + "";
for (let i = 0; i < num.length; i++) {
  x *= num.charAt(i);
  // console.log(num.charAt(i));
}
console.log(x);



// console.log(3*3*7*2*1)