"use strict";

let money;

let date;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");

  date = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

let appData = {
  budget: money,
  timeData: date,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью затрат", "");
    let b = +prompt("Во сколько обойдется?", "");

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      appData.expenses[a] = b;
    } else {
      console.log("Bad result");
      i--;
    }
  }
}

chooseExpenses();

appData.moneyPerDay = +(appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay + " грн.");

if (appData.moneyPerDay < 100) {
  console.log("Низкий уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?");
    let percent = +prompt("Под какой процент?");

    appData.monthIncome = +((save / 100 / 12) * percent).toFixed();
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();

console.log(appData);

/*let i = 0;

while (i < 2) {
    let a = prompt('Введите обязательную статью затрат', '');
    let b = +prompt('Во сколько обойдется?', '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {

        appData.expenses[a] = b;
    } else {
        console.log('Bad result');
        i--;
    }
    i++;
}*/

/*let i = 0;

do {
    let a = prompt('Введите обязательную статью затрат', '');
    let b = +prompt('Во сколько обойдется?', '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {

        appData.expenses[a] = b;
    } else {
        console.log('Bad result');
        i--;
    }
    i++;
} while (i < 2);*/
