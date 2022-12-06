const categories = document.querySelectorAll('#categories h2');
const categoriesArray = Array.from(categories).length;

console.log(`Number of categories: ${categoriesArray}`);

categories.forEach((el, i)=>{
    console.log(`Category: ${el.textContent}`);
    const element = document
    .getElementsByClassName("item")[i]
    .getElementsByTagName('li');
    const elementArray = Array.from(element).length;
    console.log(`Elements: ${elementArray}`);
});

