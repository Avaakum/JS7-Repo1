'use strict';

let money = +prompt("Ваш бюджет на месяц?", "111111"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

// let money = 111111,
//   time = "YYYY-MM-DD";

let appData = {
    moneyBudget: money, //бюджет из переменной
    timeDate: time, //дата из переменной
    expenses: {}, //обязательные расходы
    optionalExpenses: {}, //необязательные расходы(пусто)
    extraIncome: {}, //доп доход
    savings: false //накопления
};

let mandatoryExpense = prompt("Введите обязательную статью расходов в этом месяце", "Еда"),
    costMandExp = prompt("Во сколько обойдется?", "5");
    
appData.expenses[mandatoryExpense] = costMandExp;


mandatoryExpense = prompt("Введите обязательную статью расходов в этом месяце", "Транспорт");
costMandExp = prompt("Во сколько обойдется?", "7");

appData.expenses[mandatoryExpense] = costMandExp;

console.log(appData);

alert("Бюджет на 1 день " + appData.moneyBudget / 30);

// console.log(typeof(appData.moneyBudget));


