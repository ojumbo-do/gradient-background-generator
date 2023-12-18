let cssCode = document.querySelector("h3");
let color01 = document.querySelector(".color01");
let color02 = document.querySelector(".color02");
let body = document.getElementById("whole-body");

const setBackground = function () {
  body.style.background = `linear-gradient(to right, ${color01.value}, ${color02.value})`;
  cssCode.textContent = `${body.style.background};`;
};

color01.addEventListener("input", setBackground);

color02.addEventListener("input", setBackground);
