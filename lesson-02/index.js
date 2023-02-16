// # Модуль 1. Заняття 2. Розгалуження. Цикли

// ## Example 1 - Введення користувача та розгалуження

// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
// `"Яка офіційна назва JavaScript?"`. Якщо користувач вводить
// `ECMAScript`, то показуй alert з рядком `"Правильно!"`, в іншому випадку -
// `"Не знаєте? ECMAScript!"`

// 1. Запитати в користувача назву мови програмування і зберегти дані.
// 2. Перевірити дані
// 3. Якщо дані введені вірно, вивести в консоль рядок "Правильно!".
// 4. Якщо дані введені не вірно, вивести в консоль рядок "Не знаєте? ECMAScript!".

// const input = prompt('Яка офіційна назва JavaScript?');

// if (input === 'ECMAScript') {
//     alert('Правильно!');
// } else if (input !== null) {
//     alert('Не знаєте? ECMAScript!');
// } else {
//     console.log('Користувач натиснув Скасувати ');
// }

// ## Example 2 - Відображення часу (if...else)

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка
// формату `"14 г. 26 хв."`. Якщо значення змінної `minutes` дорівнює `0`, то
// виводь рядок `"14 г."`, без хвилин.

// ```js
// const hours = 14;
// const minutes = 25;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} г. ${minutes} хв.`;
// } else {
//   timestring = `${hours} г.`;
// }
// console.log(timestring);
// ```

// ## Example 3 - Розгалуження

// Напиши скрипт, який виводить у консоль рядок `"Це позитивне число"`,
// якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь
// в консоль рядок `"Це нуль"`. Якщо передали від'ємне число, у консолі
// повинен бути рядок `"Це негативне число"`.

// ```js
// Щось не так в цьому вирішені
// const userInput = prompt('Введіть число');

// if (userInput > 0) {
//     alert('Це позитивне число');
// } else if (userInput < 0) {
//     alert('Це негативне число');
// } else if (userInput == 0) {
//     alert('Це нуль');
// } else if (userInput != Number) {
//     alert('Нічого не введено')
// } else {
//     console.log('Користувач натиснув "Скасувати"');
// }
// ```

// ## Example 4 - Вкладені розгалуження

// Напиши скрипт, який порівнює числа у змінних `a` та `b`. Якщо обидва
// значення більше `100`, то виведи в консоль максимальне з них. В протилежному
// випадку у консолі повинна бути сума значення `b` та числа 512.

// ```js
// const a = 120;
// const b = 180;
// let biggerNumber;

// console.log('Number a: ', a);
// console.log('Number b: ', b);

// if (a > 100 && b > 100) {
//   // if (a > b) {
//   //   biggerNumber = `Bigger number is a - ${a}`;
//   // } else {
//   //   biggerNumber = `Bigger number is b - ${b}`;
//   // }
//   biggerNumber = a > b ? `Bigger number is a - ${a}` : `Bigger number is b - ${b}`;
//    console.log(biggerNumber);
// } else {
//   console.log('Sum A + B + 512 : ', (a+b)+512);
// }
// ```

// ## Example 5 - Форматування посилання (endsWith)

// Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, додай до кінця значення `link` цей символ. Використовуй
// конструкцію `if...else`.

// ```js
// let link = 'https://my-site.com/about';
// // Пиши код нижче за цей рядок
// if (link.endsWith('/')) {
//   console.log('Добавляти не потрібно');
  
// } else {
//   link += '/';
//   console.log('Добавили /');
// }
// // Пиши код вище за цей рядок
// console.log(link);
// ```

// ## Example 6 - Форматування посилання (includes та логічне «І»)

// Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, додай до кінця значення `link` цей символ, але тільки в
// тому випадку, якщо в `link` є підрядок `"my-site"`. Використовуй конструкцію
// `if...else`.

// ```js
// let link = 'https://somemy-site.com/about';
// // Пиши код нижче за цей рядок
// if (!link.endsWith('/') && link.includes('my-site')) {
//     link += '/';
//   console.log('Добавили /');
// } else {
//   console.log('Добавляти не потрібно');
// }
// // Пиши код вище за цей рядок
// console.log(link);
// ```

// ## Example 7 - Форматування посилання (тернарний оператор)

// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// ```js
// const a = 120;
// const b = 180;
// let biggerNumber;

// console.log('Number a: ', a);
// console.log('Number b: ', b);

// if (a > 100 && b > 100) {
//   biggerNumber = a > b ? `Bigger number is a - ${a}` : `Bigger number is b - ${b}`;
//    console.log(biggerNumber);
// } else {
//   console.log('Sum A + B + 512 : ', (a+b)+512);
// }
// ```

// ## Example 8 - if...else та логічні оператори

// Напиши скрипт який виводитиме в консоль браузера рядок залежно від
// значення змінної `hours`.

// Якщо значення змінної `hours`:

// - менше `17`, виводь рядок `"Pending"`
// - більше або дорівнює `17` і менше або дорівнює 24, виводь рядок `"Expires"`
// - більше `24` , виводь рядок `"Overdue"`

// ```js
// const hours = 10;
// ```

// ## Example 9 - Дедлайн здачі проекту (if...else)

// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй
// конструкцію `if...else`.

// - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Дата у майбутньому"`

// ```js
// const daysUntilDeadline = 5;
// // Пиши код нижче за цей рядок
// ```

// ## Example 10 - Дедлайн здачі проекту (switch)

// Виконай рефакторинг коду задачі номер 5 використовуючи `switch`.

// ```js
// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому');
// }
// ```

// ## Example 11 - Цикл for

// Напиши цикл for, який виводить у консоль браузера числа за зростанням від `min`
// до `max`, але тільки якщо число кратне `5`.

// ```js
// const max = 100;
// const min = 20;
// ```

// ## Example 12 - Введення користувача та розгалуження

// Напиши скрипт, який питатиме логін за допомогою `prompt` та логувати
// результат у консоль браузера.

// - Якщо відвідувач вводить `"Адмін"`, то `prompt` запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок `"Скасовано"`
// - В іншому випадку вивести рядок `"Я вас не знаю"`

// Пароль перевіряти так:

// - Якщо введено пароль `"Я адмін"`, то вивести рядок `"Здрастуйте!"`
// - Інакше виводити рядок `"Невірний пароль"`


//  Додаткова задача зі switch

// let foo = '';
// let output = 'Output: ';

// switch (foo) {
//     default:
//         console.log('Please pick a number from 0 to 5!');
//         break;
//     case 0:
//         output += 'So '; // Output: So What Is Your Name?
//     case 1:
//         output += 'What ';
//         output += 'Is ';
//     case 2:
//         output += 'Your ';
//     case 3:
//         output += 'Name';
//     case 4:
//         output += '?';
//         console.log(output);
//         break;
//     case 5:
//         output += '!';
//         console.log(output);
//         break;
// }
// 1. Перевіряє yci case/default чи відповідає якийсь виразу switch.
// 2. Якщо знаходить такий кейс - починає виконувати до break в switch або до кінця циклу,
// 3. Якщо знаходить такий кейс - переходить до наступної інструкції після switch


// // Задача про область видимості

// const global = "global";

// if (true) {
//   const blockA = "block A";

//   // Бачимо глобальну + локальну A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

//   // Змінні blockB і blockC не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockB); // ReferenceError: blockB is not defined
//   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = "block B";

//     // Бачимо глобальну + зовнішню A + локальну B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     // Змінна blockC не знайдена в доступних областях видимості.
//     // Буде помилка звернення до змінної.
//     console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

//   // Бачимо глобальну + локальну C
//   console.log(global); // global
//   console.log(blockC); // block C

//   // Змінні blockA і blockB не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockA); // ReferenceError: blockA is not defined
//   console.log(blockB); // ReferenceError: blockB is not defined
// }

// // Бачимо лише глобальну
// console.log(global); // global

// // Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// // Буде помилка звернення до змінної.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined