// const categoryName = document.querySelectorAll('h2');
// const categoryLength = categoryName.length;
// console.log('Number of categories:', categoryLength);

const cateforyItem = document.querySelectorAll('.item');
console.log('Number of categories:', cateforyItem.length);

const categoriesType = cateforyItem.forEach((item) => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
});