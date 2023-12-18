let css = document.querySelector("h3");
let color01 = document.querySelector(".color01");
let color02 = document.querySelector(".color02");
let body = document.getElementById("whole-body");

const setGradient = function () {
  body.style.background = `linear-gradient(to right, ${color01.value}, ${color02.value})`;
  console.log(color01);
  console.log(color02);
  css.textContent = `${body.style.background};`;
};

color01.addEventListener("input", setGradient);

color02.addEventListener("input", setGradient);
