const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector(`#ingredients`);
const ingredientRef = ingredients.map(element => {
  const itemRef = document.createElement('li');
  itemRef.textContent = element;
  itemRef.classList.add('item');
  return itemRef;

});

listRef.append(...ingredientRef);




