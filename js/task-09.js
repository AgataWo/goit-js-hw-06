function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const bgColor = document.querySelector(".color")

function changeBackground(color) {
  document.body.style.background = color;
  bgColor.innerHTML=`<span class="color">${color}</span>`;
}

button.addEventListener("click",function() { changeBackground(getRandomHexColor()) });