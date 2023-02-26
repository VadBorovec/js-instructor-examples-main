// # Модуль 3. Заняття 1. Об'єкти

// <!-- https://github.com/luxplanjay/js-33-qna/blob/03-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/js/vehicles.js -->

// ## Example 1 - Основи об'єктів

// Напиши скрипт, який для об'єкта `user`, послідовно:

// - додає поле `mood` зі значенням `'happy'`
// - замінює значення `hobby` на `'skydiving'`
// - замінює значення `premium` на `false`
// - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
//   `Object.keys()` та `for...of`

// ### Код

// ```js
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// // console.log(user);

// const keys = Object.keys(user); // [name, age, hobby, premium, mood];

// // console.log(keys);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
// ```

// ## Example 2 - метод Object.values()

// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно
// вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.

// ### Код

// ```js
// // const salaries = {};

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries); // [100, 160, 130]

// // console.log(values);

// let sum = 0;

// for (const value of values) {
//   sum += value;
// }

// console.log(sum);
// ```

// ## Example 3 - Масив об'єктів

// Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта

// ### Код

// ```js
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
// ];

// const stonesManual = [
//   { name: 'Смарагд', price: 130, quantity: 8 },
//   { name: 'Діамант', price: 270, quantity: 13 },
//   { name: 'Сапфір', price: 40, quantity: 6 },
// ];

// const calcTotalPrice = function (stonesParam, stoneName) {
//   let sum = 0;

//   for (const stone of stonesParam) {
//     if (stone.name !== stoneName) {
//       continue;
//     }

//     sum += stone.price * stone.quantity;
//   }

//   return sum;
// };

// console.log(calcTotalPrice(stones, 'Сапфір'));
// console.log(calcTotalPrice(stonesManual, 'Сапфір'));
// ```

// ## Example 4 - Комплексні завдання

// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.

// ```js
// // Типів транзакцій всього два.Можна покласти чи зняти гроші з рахунку.

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// // Кожна транзакція це об'єкт із властивостями: id, type та amount

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,
//   // Історія транзакцій
//   transactions: [],
// // Метод створює та повертає об'єкт транзакції.
// // Приймає суму та тип транзакції.

//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length,
//       amount,
//       type,
//     }
//   },


// // Метод, що відповідає за додавання суми до балансу.
// // Приймає суму транзакції.
// // Викликає createTransaction для створення об'єкта транзакції
// // після чого додає його до історії транзакцій

//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

//     this.balance += amount;
//     this.transactions.push(transaction);
//   },

// // Метод, що відповідає за зняття суми з балансу.
// // Приймає суму транзакції.
// // Викликає createTransaction для створення об'єкта транзакції
// // // після чого додає його до історії транзакцій.
// // Якщо amount більше ніж поточний баланс, виводь повідомлення
// // про те, що зняття такої суми не можливе, недостатньо коштів.

//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('Зняття такої суми не можливе, недостатньо коштів');

//       return;
//     }

//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

//     this.balance -= amount;
//     this.transactions.push(transaction);
//   },

// // Метод повертає поточний баланс

//   getBalance() {
//     return this.balance;
//   },

// // Метод шукає та повертає об'єкт транзакції по id

//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

// // Метод повертає кількість коштів
// // певного типу транзакції з усієї історії транзакцій

//   getTransactionTotal(type) {
//     let sum = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }

//     return sum;
//   },
// };
// // ```

// console.log(account.getBalance());

// account.deposit(100);
// console.log(account.getBalance());
// console.log(account.transactions);

// account.withdraw(150);
// account.withdraw(50);
// console.log(account.getBalance());
// console.log(account.transactions);

// console.log(account.getTransactionDetails(1));

// account.deposit(200);
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
