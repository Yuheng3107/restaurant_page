import Espresso from "../Espresso.jpg";
import BubbleTea from "../BubbleTea.jpg";
import Latte from "../Latte.jpg";
import Matcha from "../Matcha.jpg";
import Tea from "../Tea.jpg";
import Mocha from "../Mocha.jpg";

export default function createMenuPage(content) {
  let container = document.createElement("div");
  container.classList.add("container");
  let row = document.createElement("div");
  row.classList.add(
    "row",
    "row-cols-3",
    "gy-5",
    "d-flex",
    "justify-content-around"
  );
  let options = [
    ["Latte", "$5", Latte],
    ["Espresso", "$3", Espresso],
    ["Mocha", "$5", Mocha],
    ["Matcha", "$6", Matcha],
    ["Bubble Tea", "$7", BubbleTea],
    ["Green Tea", "$3", Tea],
  ];
  options.forEach((option) => {
    row.appendChild(createCard(...option));
  });
  content.innerHTML = "";
  content.appendChild(row);
}

function createCard(name, price, img) {
  let col = document.createElement("div");
  col.classList.add("col");
  col.innerHTML = `<div class="card h-100">
  <img src="${img}" alt="Image of ${name}" class="card-img-top" />
  <div class="card-header"><h2>${name}</h2></div>
  <div class="card-body">
    <h4 class="card-title">${price}</h4>
    <button class="btn btn-success">Buy</button>
  </div>`;
  return col;
}
