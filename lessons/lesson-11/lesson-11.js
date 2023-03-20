// const container = document.querySelector('#container');
// const container = document.getElementById('container');

// console.log(container);
// console.log(container.childNodes);
// console.log(container.children);

// ==========================================================================

//* 1. Створити список технологій ЩО вивчаються на курсі Fullstack за допомогою js
// Показати як це робиться через **тар** та **reduce**

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

/*
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
*/

const listEl = document.createElement('ul');
// console.log(listEl);

for (const technology of technologies) {
  const liEl = document.createElement('li');

  // // 1. var
  // liEl.textContent = technology;
  // // 2. var
  const text = document.createTextNode(technology);
  liEl.appendChild(text);

  listEl.appendChild(liEl);
}

// console.log(listEl);

// додає в самий кінець
// document.body.appendChild(listEl);

// додає у відповідний вузол

const hero = document.querySelector('.hero');
hero.after(listEl);

// element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.

// ==========================================================================

//* 2. Створити кілька кнопок на основі масива 3 обектами використовуючи createElement

console.log(document);
