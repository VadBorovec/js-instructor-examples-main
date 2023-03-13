const image = document.querySelector('.image');
const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close

const dishes = document.querySelectorAll('.dishes > li');
dishes.forEach(dish => {
  console.log(dish.dataset.id);
});
