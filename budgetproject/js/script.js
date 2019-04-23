'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "800000");
  time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

  while (isNaN(money) || money == "" || money == null) { //проверяем на "не цифры" или "пустую строку"
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
  extraIncome: [], //доп доход
  savings: true, //накопления
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let mandExp = prompt("Введите обязательную статью расходов в этом месяце", "x"),
        //mandExp - mandatoryExpenses - обязательные расходы
        costMandExp = prompt("Во сколько обойдется?", "1");
      console.log(typeof (costMandExp));
      console.log(typeof (mandExp));

      if ((typeof (mandExp)) === 'string' && mandExp != null && costMandExp != null &&
        mandExp != '' && costMandExp != '' && mandExp.length < 50) {
        console.log("Allright");
        appData.expenses[mandExp] = costMandExp;
      } else {
        // alert("Введите пожалуйста реальные данные статьи расходов и затраты на нее. Название статьи расходов не должно превышать 50 символов.");
        --i;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.moneyBudget / 30).toFixed(2);
    //этот метод округляет число, причем именно число
    alert("Бюджет на 1 день: " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка..");
    } else {
      console.log("Ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?", "31530000"),
        percent = +prompt("Под какой процент?", "6");

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход от вашего депозита в месяц: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let optExp = prompt("Статья необязательных расходов?", "Games");
      if ((typeof (optExp)) === 'string' && optExp != null && optExp != '') {
        console.log("ok");
        appData.optionalExpenses[i + 1] = optExp;
      } else {
        --i;
      }
    }
  },
  chooseIncome: function() {

    for (let i = 0; i < 1; i++) {
      let items = prompt("Что приносит дополнительный доход? (Перечислите через запятую все источники)", "");
      if ((typeof (items)) === 'string' && items != null && items != '') {
        appData.extraIncome = items.split(', ');
        appData.extraIncome.push(prompt('Может что-то еще?)', ''));
        appData.extraIncome.sort();
        appData.extraIncome.forEach(function (item, x) {
          console.log('Способы доп. заработка: ' + (x + 1) +'. ' + item);
        });

      } else {
        --i;
      }
    }
    


 
  }
};

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ' имеет значение ' + appData[key]);
}
