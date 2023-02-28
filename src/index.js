import CafeBackground from "../cafe.jpg";
import makeHomePage from "./homepage";
import makeMenuPage from "./menu";
import makeContactPage from "./contact";
import "./styles.css";

const content = document.querySelector("#content");
const brand = document.querySelector("#brand");
const contact = document.querySelector("#contact");
const menu = document.querySelector("#menu");
const displayModalButton = document.querySelector("#display-modal");
const body = document.querySelector("body");

body.style.backgroundImage = CafeBackground;

makeHomePage(content);
brand.addEventListener("click", () => {
  makeHomePage(content);
});

menu.addEventListener("click", () => {
  makeMenuPage(content);
});

contact.addEventListener("click", (e) => {
  makeContactPage(content);
  displayModalButton.click();
});
