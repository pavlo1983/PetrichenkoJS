"use strict";

let money = prompt("Ваш бюджет на месяц?", '');

let date = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savigs: false
};

let firstQuestion = prompt(
    "Введите обязательную статью расходов в этом месяце",
    ""
);

let secondQuestion = prompt("Во сколько обойдется?", "");

let thirdQuestion = prompt(
    "Введите обязательную статью расходов в этом месяце",
    ""
);

let fourthQuestion = prompt("Во сколько обойдется?", "");

appData.expenses[firstQuestion] = secondQuestion;

appData.expenses[thirdQuestion] = fourthQuestion;

let dayBudget = Math.floor(
    (Number(appData.budget) -
        Number(appData.expenses[firstQuestion]) -
        Number(appData.expenses[thirdQuestion])) /
    30
);

alert("Ваш отсавшийся дневной бюджет " + dayBudget + " грн.");