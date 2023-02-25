// ==============================================================================
// 1

// ==============================================================================
// 2

// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.
// Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// В об'єкті apartment присутня властивість owner
// Значення властивості owner - це об'єкт
// В об'єкті owner присутня властивість name
// Значення властивості name - це "Henry"
// В об'єкті owner присутня властивість phone
// Значення властивості phone - це "982-126-1588"
// В об'єкті owner присутня властивість email
// Значення властивості email - це "henry.carter@aptmail.com"

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email:'henry.carter@aptmail.com',
//     },
// };

// console.log(apartment);

// ==============================================================================
// 3

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// Оголошена змінна aptRating
// Значення змінної aptRating - це число 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це рядок "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це число 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це масив рядків ["premium", "promoted", "top"]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// ==============================================================================
// 4

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

// Оголошена змінна apartment за допомогою const
// Значення змінної apartment - це об'єкт
// Оголошена змінна ownerName за допомогою const
// Значення змінної ownerName - це рядок "Henry"
// Оголошена змінна ownerPhone за допомогою const
// Значення змінної ownerPhone - це "982-126-1588"
// Оголошена змінна ownerEmail за допомогою const
// Значення змінної ownerEmail - це "henry.carter@aptmail.com"
// Оголошена змінна numberOfTags за допомогою const
// Значення змінної numberOfTags - це 3
// Оголошена змінна firstTag за допомогою const
// Значення змінної firstTag - це "premium"
// Оголошена змінна lastTag за допомогою const
// Значення змінної lastTag - це "top"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Change code above this line

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// ==============================================================================
// 5

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment,
// використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна aptRating
// Значення змінної aptRating - це 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це ["premium", "promoted", "top"]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// ==============================================================================
// 6

// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості price - це число 5000
// Значення вкладеної властивості rating - це число 4.7
// Значення вкладеної властивості name - це рядок "Henry Sibola"
// Значення вкладеної властивості tags - це масив ["premium", "promoted", "top", "trusted"]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// console.log(apartment);

// ==============================================================================
// 7

// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості area - це число 60
// Значення вкладеної властивості rooms - це число 3
// Значення вкладеної властивості location - це об'єкт
// Значення вкладеної властивості location.country - це рядок "Jamaica"
// Значення вкладеної властивості location.city - це рядок "Kingston"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: 'Jamaica',
//     city: 'Kingston',
// };

// console.log(apartment);

// ==============================================================================
// 8

// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags
// зі значеннями зі змінних з аналогічними іменами.Обов'язково використовуй синтаксис коротких властивостей.

// Оголошена змінна product
// Значення змінної product - це об'єкт
// Значення вкладеної властивості name - це рядок "Repair Droid"
// Значення вкладеної властивості price - це число 2500
// Значення вкладеної властивості image - це рядок "https://via.placeholder.com/640x480"
// Значення вкладеної властивості tags - це масив ["on sale", "trending", "best buy"]

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//     name,
//     price,
//     image,
//     tags,
//   // Change code above this line
// };

// console.log(product);

// ==============================================================================
// 9

// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості:
// email і password, імена яких зберігаються у змінних emailInputName і passwordInputName.

// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості
// password - рядок "jqueryismyjam".

// Оголошена змінна credentials
// Значення змінної credentials - це об'єкт
// Об'єкт credentials містить властивість email
// Значення вкладеної властивості email - це рядок "henry.carter@aptmail.com"
// Об'єкт credentials містить властивість password
// Значення вкладеної властивості password - це рядок "jqueryismyjam"

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam',
//   // Change code above this line
// };

// console.log(credentials.email);
// console.log(credentials.password);

// ==============================================================================
// 10

// // for...in
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі,
// а в масив values всі значення його властивостей.

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// ==============================================================================
// 11

// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.

// Оголошена змінна advert.
// Значення змінної advert - це об'єкт.
// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
//   // Change code above this line
// }

// console.log(keys);
// console.log(values);

// ==============================================================================
// 12

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта
// в параметрі object.Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ==============================================================================
// 13

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys
// масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// }

// console.log(values);

// ==============================================================================
// 14

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і,
// можливо, але не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

// function countProps(object) {
//   // Change code below this line
//     let propCount = 0;
//     const keys = Object.keys(object);
//   for (const key of keys) {
//       propCount += 1;
//   }
//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ==============================================================================
// 15

// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну
// values - масив всіх значень його властивостей.Використовуй методи Object.keys() і Object.values().

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// ==============================================================================
// 16

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я
// співробітника, а значення властивості - це зарплата.Функція повинна розрахувати загальну суму зарплат
// співробітників і повернути її.Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const values = Object.values(salaries);
//     for (const value of values) {
//         totalSalary += value;
//     }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// ==============================================================================
// 17

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення
// властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// console.log(colors);
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ==============================================================================
// 18

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.
// Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві products і повертає його
// ціну(властивість price).Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return `Price of ${product.name} is ${product.price}`;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// let res = getProductPrice("Radar");
// console.log(res);
// res = getProductPrice("Grip");
// console.log(res);
// res = getProductPrice("Scanner");
// console.log(res);
// res = getProductPrice("Droid");
// console.log(res);
// res = getProductPrice("Engine");
// console.log(res);

// ==============================================================================
// 19

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const allPropValues = [];
//   for (const product of products) {
//     const keys = Object.keys(product);
//     if (keys.includes(propName)) {
//       allPropValues.push(product[propName]);
//     }
//   }
//   return allPropValues;
//   // Change code above this line
// }

// let res = getAllPropValues("name");
// console.log(res);
// res = getAllPropValues("quantity");
// console.log(res);
// res = getAllPropValues("price");
// console.log(res);
// res = getAllPropValues("category");
// console.log(res);

// ==============================================================================
// 20

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.
// Функція повинна повернути загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products.

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     const value = Object.values(product);
//     // console.log(value);
//     if (value.includes(productName)) {
//       // console.log(`Includes: ${productName} with price ${product['price']} and quantity ${product.quantity}`);
      
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
//       break;
//     }
//   }
//   return totalPrice;
// }

// // OR
// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//       break;
//     }
//   }
//   return totalPrice;
// }

// let res = calculateTotalPrice("Blaster");
// console.log(res);
// res = calculateTotalPrice("Radar");
// console.log(res);
// res = calculateTotalPrice("Droid");
// console.log(res);
// res = calculateTotalPrice("Grip");
// console.log(res);
// res = calculateTotalPrice("Scanner");
// console.log(res);

// ==============================================================================
// 21

// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні
// (meanTemperature).Заміни оголошення змінних yesterday, today і tomorrow однією операцією
// деструктуризації властивостей об'єкта highTemperatures.

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна meanTemperature
// Значення змінної meanTemperature - це число 29
// Використовується синтаксис деструктуризації об'єкта highTemperatures

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// ==============================================================================
// 22

// У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди.
// Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації
// властивостей об'єкта highTemperatures. Задай значення за замовчуванням для icon -
// рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна icon за допомогою деструктуризації
// Значення змінної icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Використовується деструктуризація об'єкта

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// ==============================================================================
// 23

// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації
// властивостей об'єкта highTemperatures. Задай значення за замовчуванням для highIcon -
// рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highYesterday
// Значення змінної highYesterday - це число 28
// Оголошена змінна highToday
// Значення змінної highToday - це число 26
// Оголошена змінна highTomorrow
// Значення змінної highTomorrow - це число 33
// Оголошена змінна highIcon
// Значення змінної highIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується деструктуризація об'єкта

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);

// ==============================================================================
// 24

// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// Для перебирання масиву використовується цикл for...of
// В циклі for...of використовується деструктуризація об'єкта

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   // const { hex, rgb } = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ==============================================================================
// 25

// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами,
// а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією
// деструктуризації властивостей об'єкта forecast.Задай значення за замовчуванням для іконок,
// змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна forecast
// Значення змінної forecast - це об'єкт
// Оголошена змінна highToday за допомогою деструктуризації
// Значення змінної highToday - це число 32
// Оголошена змінна lowToday за допомогою деструктуризації
// Значення змінної lowToday - це число 28
// Оголошена змінна todayIcon за допомогою деструктуризації
// Значення змінної todayIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Оголошена змінна highTomorrow за допомогою деструктуризації
// Значення змінної highTomorrow - це число 31
// Оголошена змінна lowTomorrow за допомогою деструктуризації
// Значення змінної lowTomorrow - це число 27
// Оголошена змінна tomorrowIcon за допомогою деструктуризації
// Значення змінної tomorrowIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується синтаксис деструктуризації об'єкта highTemperatures

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);
// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(tomorrowIcon);

// ==============================================================================
// 26

// Функція calculateMeanTemperature(forecast) приймає один параметр forecast -
// об'єкт температур на два дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }

// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією
// деструктуризації властивостей об'єкта forecast.

// Оголошена функція calculateMeanTemperature(forecast)
// В тілі функції використовується деструктуризація об'єкта
// В тілі функції оголошена змінна todayHigh за допомогою деструктуризації
// В тілі функції оголошена змінна todayLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowHigh за допомогою деструктуризації
// Виклик calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) повертає 28.5
// Виклик calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) повертає 37

// // Change code below this line
// function calculateMeanTemperature({
//   today: {
//     low: todayLow,
//     high: todayHigh,
//   },
//   tomorrow: {
//     low: tomorrowLow,
//     high: tomorrowHigh,
//   },
// }) {
  
//   // const {
//   //   today: {
//   //     low: todayLow,
//   //     high: todayHigh,
//   //   },
//   //   tomorrow: {
//   //     low: tomorrowLow,
//   //     high: tomorrowHigh,
//   //   },
//   // } = forecast;

//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

// ==============================================================================
// 27

// У змінній scores зберігається масив результатів тестування.Використовуючи розподіл і методи
// Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у
// worstScore - найнижчий.

// Оголошена змінна scores
// Значення змінної scores - це масив [89, 64, 42, 17, 93, 51, 26]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 93
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 17
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// ==============================================================================
// 28

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування
// окремих груп.Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// Оголошена змінна firstGroupScores
// Значення змінної firstGroupScores - це масив [64, 42, 93]
// Оголошена змінна secondGroupScores
// Значення змінної secondGroupScores - це масив [89, 14, 51, 26]
// Оголошена змінна thirdGroupScores
// Значення змінної thirdGroupScores - це масив [29, 47, 18, 97, 81]
// Оголошена змінна allScores.
// Значення змінної allScores - це масив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 97
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 14
// Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [];
const bestScore = allScores;
const worstScore = allScores;
