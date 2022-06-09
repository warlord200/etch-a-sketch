const canvas = document.querySelector(".canvas");
const colorPicker = document.querySelector("#color-picker");
const reset = document.querySelector(".reset");
const setBackgroundColor = document.querySelector(".background-color");
const randomColor = document.querySelector(".random-color");
let color = colorPicker.getAttribute("value");
let randomStatus = false;
let isWhite = true;
colorPicker.addEventListener("change", (e) => {
  color = e.target.value;
});

setBackgroundColor.addEventListener("click", () => {
  if (isWhite) {
    canvas.style.backgroundColor = "#000000";
  } else {
    canvas.style.backgroundColor = "#FFFFFF";
  }
  isWhite = !isWhite;
});

randomColor.addEventListener("click", () => {
  randomStatus = !randomStatus;
});

for (let i = 0; i < 256; i++) {
  const canvasDiv = document.createElement("div");
  canvasDiv.classList.add("canvas-div");
  canvas.appendChild(canvasDiv);
}

const canvasDiv = document.querySelectorAll(".canvas-div");
canvasDiv.forEach((div) => {
  div.addEventListener("mouseover", () => {
    if (randomStatus == true) {
      color = getRandomColor();
      colorPicker.setAttribute("value", color);
    }
    div.style.backgroundColor = color;
  });
});

reset.addEventListener("click", () => {
  canvasDiv.forEach((div) => {
    div.style.backgroundColor = null;
  });
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
