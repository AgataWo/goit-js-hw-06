const categories = document.querySelectorAll('#categories h2');
const categoriesArray = Array.from(categories).length;

console.log(`Number of categories: ${categoriesArray}`);

categories.forEach((el, i)=>{
    console.log(`Category: ${el.textContent}`);
    const x = document.getElementsByClassName("item")[i];
    const y = x.getElementsByTagName('li');
const yArray = Array.from(y).length
    console.log(`Elements: ${yArray}`);
});

