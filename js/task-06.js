const valInput = document.querySelector('#validation-input');
const inputLength = valInput.getAttribute("data-length");

console.log(inputLength);


valInput.addEventListener('blur', ()=>{
    if(parseInt(inputLength) === valInput.value.trim().length){
       valInput.classList.add('valid');
       valInput.classList.remove('invalid');

    }else {
        
       valInput.classList.add('invalid');
       valInput.classList.remove('valid');
    };
});