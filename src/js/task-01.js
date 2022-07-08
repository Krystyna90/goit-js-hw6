
const liEl = document.querySelectorAll('li.item');

console.log(`Number of categories: ${liEl.length}`);

const ulEl = document.querySelectorAll('#categories>li');
ulEl.forEach(ul => {

  console.log(
    `Category: ${ul.firstElementChild.textContent}, Elements: ${ul.lastElementChild.children.length}`,
  );
});






