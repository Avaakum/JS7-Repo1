'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "800000");
  time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

  while(isNaN(money) || money  == "" || money == null) { //проверяем на "не цифры" или "пустую строку"
  // или "нажатие кнопки отмена"
  money = +prompt("Ваш бюджет на месяц?", "800000");
  }
}
start();


let appData = {
  moneyBudget: money, //бюджет из переменной
  timeDate: time, //дата из переменной
  expenses: {}, //обязательные расходы
  optionalExpenses: {}, //необязательные расходы(пусто)
  extraIncome: {}, //доп доход
  savings: true //накопления
};

function chooseExpenses() { //обернули 2 ввода с проверками в функции
  for (let i = 0; i < 2; i++) {
    let mandExp = prompt("Введите обязательную статью расходов в этом месяце", "x"),
      //mandExp - mandatoryExpenses - обязательные расходы
      costMandExp = prompt("Во сколько обойдется?", "1");
      console.log(typeof (costMandExp));
      console.log(typeof (mandExp));



    if ((typeof (mandExp)) === 'string' && (typeof (mandExp)) !== null && (typeof (costMandExp)) != null &&
      mandExp != '' && costMandExp != '' && mandExp.length < 50) {
      console.log("Allright");
      appData.expenses[mandExp] = costMandExp;
    } else {
      alert("Введите пожалуйста реальные данные статьи расходов и затраты на нее. Название статьи расходов не должно превышать 50 символов.");
      --i; //не верится, что так просто...
    }
  }
}
chooseExpenses();


function detectDayBudget() {
  appData.moneyPerDay = (appData.moneyBudget / 30).toFixed(2);
  //этот метод округляет число, причем именно число
  alert("Бюджет на 1 день: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка..");
  } else {
    console.log("Ошибка");
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?","31530000"),
        percent = +prompt("Под какой процент?","6");

    appData.monthIncome = save/100/12*percent;
    alert("Доход от вашего депозита в месяц: " + appData.monthIncome);
  }
}
checkSavings();


function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let optExp = prompt("Статья необязательных расходов?", "Games");
      while ((typeof (optExp)) !== 'string' || optExp == "" || optExp == null) {
        --i;
      }
      console.log("ok");      
      appData.optionalExpenses[i + 1] = optExp;        
  }
}
chooseOptExpenses();

console.log(appData);