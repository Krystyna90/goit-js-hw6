const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector('#ingredients');

const ingredientsMaker = ingredientsArray => {
  return ingredientsArray.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = ingredient;

    return liEl;
  });
};

const elements = ingredientsMaker(ingredients);
ingredientsContainer.append(...elements);
console.log(ingredientsContainer);



