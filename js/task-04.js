const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const value = document.getElementById('value');

const valueNumber = parseInt(value.textContent);

let counterValue = valueNumber;

const handleClickDec = ()=>{
    counterValue-=1;
    value.innerHTML = `<span id=value>${counterValue}</span>`
};
const handleClickInc = ()=>{
    counterValue+=1;
    value.innerHTML = `<span id=value>${counterValue}</span>`
};


buttonDecrement.addEventListener("click", handleClickDec);
buttonIncrement.addEventListener("click", handleClickInc);
