'use strict';
let money, time, month = 30;

function start() {
  money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '2018-11-15');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
}
start();


let appData = {
  budjet: money, //бюджет
  timeData: time, //данные времени
  expenses: {}, //обязательные расходы
  optionalExpenses: {}, //необязательные расходы()
  income: [], //доп. доходом(массив)
  savings: true, //свойство
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let fstQuest = prompt("Введите обязательную статью расходов в этом месяце",
          "8000"),
        secQuest = prompt("Во сколько обойдется?", "18000");

      //проверить не пустой и ответ. не null(при отмене) и не пустой ''.
      // не больше 50-ти символов. 
      if ((typeof (fstQuest)) === 'string' && (typeof (fstQuest)) != null &&
        (typeof (secQuest)) != null && fstQuest != '' && secQuest != '') {

        appData.expenses[fstQuest] = secQuest;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budjet / 30).toFixed(2);
    console.log("money " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("высокий уровень достатка");
    } else {
      console.log("произошла ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("какова сумма накоплений?"),
        percent = +prompt("под какой процент?");
      appData.monthincome = save / 100 / 12 * percent;
      alert("доход в месяц с вашего депозита: " + appData.monthincome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let qst = prompt("Статья необязательных расходов??");

      if ((typeof (qst)) === 'string' && (typeof (qst)) != null && qst != '') {
        appData.optionalExpenses[i] = qst;
      } else {
        i--;
      }
    }
    console.log(appData.optionalExpenses);
    //заморочился, и добавил все проверки, чтобы данные были введены 100%
  },
  chooseIncome: function () {
    for (let i = 0; i < 1; i++) {
      let items = prompt('что принесет доолнительный доход?? (перечислите через запятую', '');
      if ((typeof (items)) === 'string' && (typeof (items)) != null &&
        items != '') {
        appData.income = items.split(', ');
      } else {
        i--;
      }
    }
    appData.income.sort();
    appData.income.forEach(function (item, i) {
      i++;
      document.write('<p>' + i + ': ' + item + '</p>');
    });
  }
};
// console.log(appData.expenses);
// console.log(appData.budjet);