// # Модуль 5. Заняття 9. Контекст виклику функції та this

// ## Example 1 - Майстерня коштовностей

// Напишіть метод `calcTotalPrice(stoneName)`, який приймає назву каменю і
// розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
// кількістю з властивості `stones`.

// // ```js
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find(({ name }) => stoneName === name);
//     return currentStone.price * currentStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// // ```

// 1. Контекст у функції визначається на момент її виклику,
// а не на момент створення
// 2. Контекстом функції буде обєкт який її викликав

// //============================================================

// ## Example 2 - Телефонна книга

// Виконайте рефакторинг методів об'єкту `phonebook` щоб код запрацював.

// // ```js
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.table(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.table(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );
// // ```

// //============================================================

// ## Example 3 - Калькулятор

// Створіть об'єкт `calculator` з трьома методами:

// - `read(a, b)`- приймає два значення та зберігає їх як властивості об'єкта.
// - `add()` - повертає суму збережених значень.
// - `mult()` - перемножує збережені значення та повертає результат.

// // ```js
// const calculator = {
//   a: 0,
//   b: 0,
//   read(a, b) {
//     this.a = a;
//     this.b = b;

//     return this;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(5, 10);
// console.log(calculator);
// console.log(calculator.add()); // 15
// console.log(calculator.mult()); // 50
// console.log(calculator.read(11, 3).mult()); // 33
// // ```

// //======================================================
// this in callback functions

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - ue виклик методу getFullName без об'єкта
//   console.log(`06робляемо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer));
// // makeMessage(
// //   customer.getFullName.bind({
// //     firstName: 'Olg',
// //     lastName: 'Bond',
// //   })
// // );

// call, аррly - викликають ф-цію- на місці
// bind - робить копію - ф-ції

// 'use strict';

// function globalFunc() {
//   console.log(this);
// }

// const globalArrowFunc = () => {
//   console.log(this);
// };

// console.log(this); // ?
// globalFunc(); // ?
// globalArrowFunc(); // ? must be Window , but there we have - undefined

//! при передачі ф-ції в якості колбеку, ii контекст не зберігається
//! для прив язки контексту використувуються методи call, apply i bind
//! call/apply викликають ф-цію на місці i вказують ій контекст (1 аргумент)
//! bind - - 3B' 'язує, робить копію ф-ції i вказує контекст
// (використовуйте при передачі ф-ції В якості колбеку)

// dsfsdf
// sdfsdf
// dfsdf
// sdfsdf
// /fsdfsdf
// sdfsdfs
// /sdfsdfs
// casas
// caaca
// cadcsdcsd
// cvsdvsdcdasc
// cdscdsc
