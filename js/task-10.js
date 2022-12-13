function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const input = document.querySelector("input");
const create = document.querySelector("[data-create");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

let amount = 0;

input.addEventListener("input", (ev) => {
  amount = Number(ev.currentTarget.value);
});

create.addEventListener("click", createBoxes);

function createBoxes() {
    for (let i = 1; i <= amount; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    boxes.append(newBox);
    const amountBoxes = document.getElementsByClassName("box");
    const amountBoxesArray = Array.from(amountBoxes).length;
    let sizer = 20+10*amountBoxesArray;
    newBox.style.width = `${sizer}px`;
    newBox.style.height = `${sizer}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    
    console.log(sizer+10*amountBoxesArray);
  }
};


destroy.addEventListener("click", () => {
    boxes.innerHTML='';
    document.querySelector("input").value="";
    amount=0;
});
