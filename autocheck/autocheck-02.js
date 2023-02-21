// 1

// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"
// В тілі функції є тільки одна інструкція if
// В тілі функції відсутні інструкції else або else if

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// let res = checkAge(20);
// console.log(res);
// checkAge(8);
// console.log(res);
// checkAge(14);
// console.log(res);
// checkAge(38);
// console.log(res);

// =============================================================================

// 02

// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з
// паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//     }
    
//   return message;
//   // Change code above this line
// }

// let res = checkPassword("mangohackzor");
// console.log(res);
// res = checkPassword("polyhax");
// console.log(res);
// res = checkPassword("jqueryismyjam");
// console.log(res);

// OR

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//     if (password === ADMIN_PASSWORD) {
//   return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// let res = checkPassword("mangohackzor");
// console.log(res);
// res = checkPassword("polyhax");
// console.log(res);
// res = checkPassword("jqueryismyjam");
// console.log(res);

// =====================================================================================================

// 3

// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(70, 0) повертає "Your order is empty!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(150, 0) повертає "Your order is empty!"

// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//       return "Your order is empty!";
//     }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//     }
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// let res = checkStorage(100, 50);
// console.log(res);
// res = checkStorage(100, 130);
// console.log(res);
// res = checkStorage(70, 0);
// console.log(res);
// res = checkStorage(200, 20);
// console.log(res);
// res = checkStorage(200, 250);
// console.log(res);
// res = checkStorage(150, 0);
// console.log(res);

// ========================================================================================

// 4

// Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]

// Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

// =================================================================================================

// 5

// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву

// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "apple"
// Оголошена змінна secondElement
// Значення змінної secondElement - це рядок "plum"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "orange"

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// ================================================================================

// 6

// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "peach", "pear", "banana"]

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

// ===================================================================================

// 7

// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

// Оголошена змінна fruitsArrayLength
// Значення змінної fruitsArrayLength - це число 4

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// ======================================================================================

// 8

// Оголоси дві зміні:

// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву

// Оголошена змінна lastElementIndex
// Значення змінної lastElementIndex - це число 3
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "banana"

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// // const lastElement = fruits[fruits.length - 1];
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// =======================================================================================

// 9

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини.
// Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]


// 1st
// function getExtremeElements(array) {
//   // Change code below this line
//     return [array[0], array[array.length - 1]];
//   // Change code above this line
// }

// 2nd
// function getExtremeElements(array) {
//   // Change code below this line
//     let array1 = [];
//     array1.push(array[0]);
//     array1.push(array[array.length - 1]);
//     return array1;
//   // Change code above this line
// }

// let res = getExtremeElements([1, 2, 3, 4, 5]);
// console.log(res);
// res = getExtremeElements(["Earth", "Mars", "Venus"]);
// console.log(res);
// res = getExtremeElements(["apple", "peach", "pear", "banana"]);
// console.log(res);

// ================================================================================

// 10

// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words
// результат поділу рядка message за роздільником delimiter - масив рядків.

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// let res = splitMessage("Mango hurries to the train", " ");
// console.log(res);
// res = splitMessage("Mango", "");
// console.log(res);
// res = splitMessage("best_for_week", "_");
// console.log(res);

// ====================================================================================================

// 11

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
// залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).Ця функція приймає рядок, що складається
// зі слів, розділених лише пробілами(параметр message) та ціну гравірування одного слова(параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
    const array = message.split(' ');
    // return array.length;
    return array.length * pricePerWord;
   // Change code above this line
}

let res = calculateEngravingPrice("JavaScript is in my blood", 10);
console.log(res);
calculateEngravingPrice("JavaScript is in my blood", 20);
console.log(res);
calculateEngravingPrice("Web-development is creative work", 40);
console.log(res);
calculateEngravingPrice("Web-development is creative work", 20);
console.log(res);

// Запитати в ментора за 11 завдання