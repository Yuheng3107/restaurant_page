import CafeBackground from "./cafe.jpg";
import makeHomePage from "./homepage";

const navbar = document.querySelector("nav");
const content = document.querySelector("#content");
const brand = document.querySelector("#brand");
const contact = document.querySelector("#contact");
const menu = document.querySelector("#menu");

brand.addEventListener("click", () => {
  makeHomePage(content);
});
