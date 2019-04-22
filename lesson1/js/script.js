'use strict';

let money = +prompt("Ваш бюджет на месяц?", "800000"),
  time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");


let appData = {
  moneyBudget: money, //бюджет из переменной
  timeDate: time, //дата из переменной
  expenses: {}, //обязательные расходы
  optionalExpenses: {}, //необязательные расходы(пусто)
  extraIncome: {}, //доп доход
  savings: false //накопления
};


for (let i = 0; i < 2; i++) {
  let mandExp = prompt("Введите обязательную статью расходов в этом месяце", ""),
    //mandExp - mandatoryExpenses - обязательные расходы
    costMandExp = prompt("Во сколько обойдется?", "");

  if ((typeof (mandExp)) === 'string' && (typeof (mandExp)) != null && (typeof (costMandExp)) != null &&
    mandExp != '' && costMandExp != '' && mandExp.length < 50) {
    console.log("Allright");
    appData.expenses[mandExp] = costMandExp;
  } else {
    alert("Введите пожалуйста реальные данные статьи расходов и затраты на нее. Название статьи расходов не должно превышать 50 символов.");
    --i; //не верится, что так просто...
  }
};


//ЦИКЛ WHILE
// let i = 0;
// while (i < 2) {
//   let mandExp = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     //mandExp - mandatoryExpenses - обязательные расходы
//     costMandExp = prompt("Во сколько обойдется?", "");
//     if ((typeof (mandExp)) === 'string' && (typeof (mandExp)) != null && (typeof (costMandExp)) != null &&
//       mandExp != '' && costMandExp != '' && mandExp.length < 50) {
//       console.log("Allright");
//       appData.expenses[mandExp] = costMandExp;
//     } else {
//       alert("Введите пожалуйста реальные данные статьи расходов и затраты на нее. Название статьи расходов не должно превышать 50 символов.");
//       --i; //не верится, что так просто...
//     }
//     i++;
// }


//ЦИКЛ DO..WHILE
// let i = 0;
// do {
//   let mandExp = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     //mandExp - mandatoryExpenses - обязательные расходы
//     costMandExp = prompt("Во сколько обойдется?", "");
//   if ((typeof (mandExp)) === 'string' && (typeof (mandExp)) != null && (typeof (costMandExp)) != null &&
//     mandExp != '' && costMandExp != '' && mandExp.length < 50) {
//     console.log("Allright");
//     appData.expenses[mandExp] = costMandExp;
//   } else {
//     alert("Введите пожалуйста реальные данные статьи расходов и затраты на нее. Название статьи расходов не должно превышать 50 символов.");
//     --i; //не верится, что так просто...
//   }
//   i++;
// } while (i < 2);


appData.moneyPerDay = appData.moneyBudget / 30

alert("Бюджет на 1 день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка..");
} else {
  console.log("Ошибка");
}

console.log(appData);