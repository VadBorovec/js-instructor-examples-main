// Функция результатом своей работы может возврашать другую функцию.

// Возвращаемая функция BO время вызова будет иметь доступ
// KO всем локальным переменным (области видимости)
// родительской функции (той из которой ее вернули),
// это называется «замыкание».

const fnA = function (parameter) {
  const innerVariable = '3начение внутренней переменной функции fnA';
};

// Поварёнок

const makeDish = function (sheffName, dish) {
  console.log(`$sheffName} готовит ${dish}`);
};
// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango','чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'soup');
// makeDish('Poly', 'кофе');

// const makeSheff = function (name) {};

// const mango = makeSheff('Mango');
// const poly = makeSheff('Poly');

mango('котлеты');
poly('чай');
