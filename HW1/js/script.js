"use strict";

let money = +prompt("Ваш бюджет на месяц?", "");

let date = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью затрат', '');
    let b = +prompt('Во сколько обойдется?', '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {

        appData.expenses[a] = b;
    } else {
        console.log('Bad result');
        i--;
    }

};

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



appData.moneyPerDay = appData.budget / 30;

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

console.log(appData.expenses);