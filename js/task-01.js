const categories = document.querySelectorAll('h2');
const categoriesArray = Array.from(categories).length;


console.log(`Number of categories: ${categoriesArray}`);

categories.forEach((el)=>{
    console.log(`Category: ${el.textContent}`);
});






// const category = document.querySelectorAll('h2');
// const categoryArray = Array.from(category);
// category.forEach((elem)=>console.log(`Category: ${elem}`));

// console.log(category);
// console.log(`Category: ${category}`);
console.log(`Elements: `);