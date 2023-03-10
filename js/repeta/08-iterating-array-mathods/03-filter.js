// Array.prototype.filter()
// - Поэлементо перебирает оригинальный массив
// - Возвращает новый массив (с элементами или пустой)
// - Добавляет В возвращаемый массив элементы которые удовлетворяют условию
// коллбек-функции
// - если коллбек вернул true элемент добавляется в возвращаемый массив
// - если коллбек вернул false элемент НЕ добавляется в возврашаемый массив

const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => {
//   console.log(number);
//   return number < 15;
// });

// // refactor

const filteredNumbers = numbers.filter(number => number < 15);

// console.log(filteredNumbers);
// console.log('numbers:', numbers);

// ==========================================================

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

//  Получаем массив всех онлайн игроков

const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);

//  Получаем массив всех off-лайн игроков

const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers);

//  Получаем список хардкорных игроков с временем больше 250

const hardcorePlayers = players.filter(player => player.timePlayed > 250);

// console.table(hardcorePlayers);
