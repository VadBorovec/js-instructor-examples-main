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

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     const arr = message.split(' ');
//     console.log('Довжина массиву: ', arr.length);
//     const total = arr.length * pricePerWord;
//     return total;
//    // Change code above this line
// }

// let res = calculateEngravingPrice("JavaScript is in my blood", 10);
// console.log(res);
// res = calculateEngravingPrice("JavaScript is in my blood", 20);
// console.log(res);
// res = calculateEngravingPrice("Web-development is creative work", 40);
// console.log(res);
// res = calculateEngravingPrice("Web-development is creative work", 20);
// console.log(res);

// ====================================================================================================

// 12

// Доповни код функції makeStringFromArray(array, delimiter) таким чином,
// щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//     string = array.join(delimiter);
//   // Change code above this line
//   return string;
// }

// let res = makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// console.log(res);
// res = makeStringFromArray(["M", "a", "n", "g", "o"], "");
// console.log(res);
// res = makeStringFromArray(["top", "picks", "for", "you"], "_");
// console.log(res);

// ====================================================================================================

// 13

// Термін slug - це людино - зрозумілий унікальний ідентифікатор, який використовується
// у веб - розробцідля створення читабельних URL - адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com / posts / 1q8fh74tx,
// можна зробити slug з назви статті.В результаті адреса буде приємнішою для сприйняття:
//     mysite.com / posts / arrays -for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

// (ЧОМУ АВТОПЕРЕВІРКА НЕ ПРИЙНЯЛА МІЙ ВАРІАНТ ?)
// function slugify(title) {
//   // Change code below this line
//     // Мій варіант
//     let slug = title.toLowerCase().replaceAll(" ", "-");

//     //  Варіант ChatGPT
//     const words = title.toLowerCase().split(' ');
//     const slug = words.join('-');

//     return slug;
//   // Change code above this line
// }

// let res = slugify("Arrays for begginers");
// console.log(res);
// res = slugify("English for developer");
// console.log(res);
// res = slugify("Ten secrets of JavaScript");
// console.log(res);
// res = slugify("How to become a JUNIOR developer in TWO WEEKS");
// console.log(res);

// ====================================================================================================

// 14

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив ["apple", "plum"]
// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
// Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = console.log(fruits.slice(0, 2));;
// const nonExtremeEls = console.log(fruits.slice(1, -1));;
// const lastThreeEls = console.log(fruits.slice(-3));;

// // OR
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// ====================================================================================================

// 15

// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// Оголошена змінна oldClients
// Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив ["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// ====================================================================================================

// 16

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масивуз усіма елементами
// двох вихідних firstArray і secondArray.Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною
// maxLength елементів.В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let newArr = firstArray.concat(secondArray);
//     if (newArr.length > maxLength) {
//         // My option
//         newArr.length = maxLength
//         // ChatGPT option
//         // return newArr.slice(0, maxLength);
//     }
//     return newArr;
//     // Change code above this line
//   }

//   let res = makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// console.log(res);
// res = makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// console.log(res);
// res = makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// console.log(res);
// res = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// console.log(res);
// res = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// console.log(res);
// res = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
// console.log(res);

// ====================================================================================================

// 17

// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1 ) { // Change this line
//   console.log(i);
// }

// ====================================================================================================

// 18

// Напиши функцію calculateTotal(number), яка приймає ціле число(параметр number) і повертаєсуму всіх цілих
// чисел від одиниці і до цього числа.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//  // Change code below this line
//     let sum = 0;
//     for (let i = 1; i <= number; i += 1) {
//         sum += i;
//     }
//     return sum;
//   // Change code above this line
// }

// let res = calculateTotal(1);
// console.log(res);
// res = calculateTotal(3);
// console.log(res);
// res = calculateTotal(7);
// console.log(res);
// res = calculateTotal(18);
// console.log(res);
// res = calculateTotal(24);
// console.log(res);

// ====================================================================================================

// 19

// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 0
// Умова циклу приводиться до true доти, доки i менше за 4
// На кожній ітерації значення змінної i збільшується на одиницю
// В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// В тілі циклу for використовується виведення у консоль змінної fruit

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ====================================================================================================

// 20

// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів.
// Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (let i = 0; i < order.length; i+= 1) {
//         const element = order[i];
//         total += element;
//     }
//     return total;
//   // Change code above this line
//   return total;
// }

// let res = calculateTotalPrice([12, 85, 37, 4]);
// console.log(res);
// res = calculateTotalPrice([164, 48, 291]);
// console.log(res);
// res = calculateTotalPrice([412, 371, 94, 63, 176]);
// console.log(res);

// ====================================================================================================

// 21

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів,
// розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// function findLongestWord(string) {
//   // Change code below this line
//     const stringArr = string.split(' ');
//     let longestWord = stringArr[0];
//     for (let i = 0; i < stringArr.length; i+= 1) {
//         const element = stringArr[i];
//         if (longestWord.length < element.length) {
//             longestWord = element;
//         }
//     }
//     return longestWord;
//   // Change code above this line
// }

// let res = findLongestWord("The quick brown fox jumped over the lazy dog");
// console.log(res);
// res = findLongestWord("Google do a roll");
// console.log(res);
// res = findLongestWord("May the force be with you");
// console.log(res);

// ====================================================================================================

// 22

// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала
// масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i ++) {
//         numbers.push(i);
//     }
//   // Change code above this line
//   return numbers;
// }

// let res = createArrayOfNumbers(1, 3);
// console.log(res);
// res = createArrayOfNumbers(14, 17);
// console.log(res);
// res = createArrayOfNumbers(29, 34);
// console.log(res);

// ====================================================================================================

// 23

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і повертає новий масив,
// в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value(число).

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push
    
function filterArray(numbers, value) {
   // Change code below this line



  // Change code above this line
}

let res = filterArray([1, 2, 3, 4, 5], 3);
console.log(res);
res = filterArray([1, 2, 3, 4, 5], 4);
console.log(res);
res = filterArray([1, 2, 3, 4, 5], 4);
console.log(res);
res = filterArray([12, 24, 8, 41, 76], 38);
console.log(res);
res = filterArray([12, 24, 8, 41, 76], 20);
console.log(res);