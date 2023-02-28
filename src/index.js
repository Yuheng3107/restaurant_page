import CafeBackground from "./cafe.jpg";
import makeHomePage from "./homepage";
import makeMenuPage from "./menu";
import makeContactPage from "./contact";

const navbar = document.querySelector("nav");
const content = document.querySelector("#content");
const brand = document.querySelector("#brand");
const contact = document.querySelector("#contact");
const menu = document.querySelector("#menu");
const displayModalButton = document.querySelector("#display-modal");

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
