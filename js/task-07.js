const slider = document.querySelector('#font-size-control');
const content = document.querySelector('#text');
slider.value=0;
slider.addEventListener('input', function(){
    const size = slider.value;
    content.style.fontSize = size + "px";
    console.log(size);
});