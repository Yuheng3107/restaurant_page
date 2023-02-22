const makeHomePage = (content) => {
  content.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.textContent = "The Perfect Place to Chill";
  h1.classList.add("mt-5", "text-white");
  content.appendChild(h1);
};

export default makeHomePage;
