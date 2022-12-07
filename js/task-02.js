const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let list = document.querySelector("#ingredients");
ingredients.forEach((item)=>{
  let li =document.createElement("li");
  li.innerText =item;
  li.classList.add("item");
  list.appendChild(li);
});