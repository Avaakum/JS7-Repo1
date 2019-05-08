'use strict';

let startBtn = document.getElementById('start'),
  budgetValue = document.querySelector('.budget-value'),
  dayBudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthSavingsValue = document.querySelector('.monthsavings-value'),
  yearSavingsValue = document.querySelector('.yearsavings-value'),
  expensesItem = document.querySelectorAll('.expenses-item'),
  expensesBtn = document.querySelectorAll('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBudgetBtn = document.getElementsByTagName('button')[2],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  income = document.querySelector('#income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('#sum'),
  percentValue = document.querySelector('#percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');
let money, time;

function disableItem(statusB, statusI, colorB, colorI) {
  expensesBtn.disabled = statusB;
  expensesBtn.style.background = colorB;
  optionalExpensesBtn.disabled = statusB;
  optionalExpensesBtn.style.background = colorB;
  countBudgetBtn.disabled = statusB;
  countBudgetBtn.style.background = colorB;
  optionalExpensesItem.forEach(function (item) {
    item.disabled = statusI;
    item.style.background = colorI;
  });
  expensesItem.forEach(function (item) {
    item.disabled = statusI;
    item.style.background = colorI;
  });
  income.style.background = colorI;
  income.disabled = statusI;
  checkSavings.disabled = statusI;
  sumValue.style.background = colorI;
  sumValue.disabled = statusI;
  percentValue.style.background = colorI;
  percentValue.disabled = statusI;
  startBtn.style.background = 'green';
}

disableItem(true, true, 'red', 'grey');

document.body.addEventListener('input', function (e) {
  let target = e.target;

  if (target.classList.contains('optionalexpenses-item')) {
    if (target.value) {
      optionalExpensesBtn.disabled = false;
      optionalExpensesBtn.style.background = 'green';
    } else {
      optionalExpensesBtn.disabled = true;
      optionalExpensesBtn.style.background = 'red';
    }
  }

  if (target.classList.contains('expenses-item')) {
    if ((expensesItem[0].value && expensesItem[1].value) || (expensesItem[2].value && expensesItem[3].value)) {
      expensesBtn.disabled = false;
      expensesBtn.style.background = 'green';
    } else {
      expensesBtn.disabled = true;
      expensesBtn.style.background = 'red';
    }
  }

  optionalExpensesItem.forEach(function (item) {
    if (item.value) {
      optionalExpensesBtn.disabled = false;
      optionalExpensesBtn.style.background = 'green';
    }
  });
});





expensesBtn.addEventListener('click', function () {
  expensesValue.textContent = '';
  let sum = 0; //сумма всех обязательных расходов
  for (let i = 0; i < expensesItem.length; i++) {
    let costMandExp = expensesItem[++i].value; //стоимость статьи расходов
    //каждый 2й инпут
    sum += +costMandExp; //суммируем все статьи(+не забываем из строеи сделать число)
  }
  expensesValue.textContent = sum;
  countBudgetBtn.disabled = false;
  countBudgetBtn.style.background = 'green';
});


optionalExpensesBtn.addEventListener('click', function () {
  optionalExpensesValue.textContent = '';
  optionalExpensesItem.forEach(function (item, i) {
    appData.optionalExpenses[i] = item.value;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  });
});


countBudgetBtn.addEventListener('click', function () {
  let exp = +expensesValue.textContent;
  if (appData.moneyBudget != undefined) {
    appData.moneyPerDay = ((appData.moneyBudget - exp) / 30).toFixed(2);
    //этот метод округляет число, причем именно число
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка..";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка..";
    } else {
      levelValue.textContent = "Ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Произошла ошибка, начните расчет.";
  }
});

income.addEventListener('input', function () {
  //используем событие input - оно происходит каждый раз, когда
  //мы вводим/удаляем символ в инпут
  let items = income.value;
  appData.extraIncome = items.split(', ');
  incomeValue.textContent = income.value;
});

checkSavings.addEventListener('click', function () {
  if (appData.savings == false) {
    appData.savings = true;
  } else {
    appData.savings = false;
  }
  sumValue.style.background = 'white';
  sumValue.disabled = false;
  percentValue.style.background = 'white';
  percentValue.disabled = false;
});

sumValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

startBtn.addEventListener('click', function () {
  time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
  money = +prompt("Ваш бюджет на месяц?", "800000");
  while (isNaN(money) || money == "" || money == null) { //проверяем на "не цифры" или "пустую строку"
    // или "нажатие кнопки отмена"
    money = +prompt("Ваш бюджет на месяц?", "800000");
  }
  disableItem(true, false, 'red', 'white');
  sumValue.disabled = true;
  percentValue.disabled = true;
  sumValue.style.background = 'grey';
  percentValue.style.background = 'grey';

  appData.moneyBudget = money;
  appData.timeDate = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  //данным способом мы берем значение, которое ввел пользователь в поле дата
  //и пользуясь методами специального объекта дата мы парсим наше значение и через
  //"new Date" получаем значение в милисекундах от 01.01.1970 до нашей даты -
  //это и есть то значение даты, которое понимает браузер, и уже из этого
  //опять же пользуясь методами этого объекта мы получаем год, месяц, день
  //причем, при выводе месяца, отчет так же идет от 0 до 11, поэтому мы прибал +1
  dayValue.value = new Date(Date.parse(time)).getDate();
});

let appData = {
  moneyBudget: money, //бюджет из переменной
  timeDate: time, //дата из переменной
  expenses: {}, //обязательные расходы
  optionalExpenses: {}, //необязательные расходы(пусто)
  extraIncome: [], //доп доход
  savings: false, //накопления
};