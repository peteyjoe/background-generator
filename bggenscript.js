var _ = require('lodash');

let css = document.querySelector("h3");
let gradientType = document.querySelector(".gradient-type")
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let enterButton = document.querySelector(".enter")
function setGradient() {
if (gradientType.value === "linear-gradient") {
	body.style.background = 
	gradientType.value
	+ "(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
} else {
	body.style.background = 
	gradientType.value
	+ "("
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
}
enterButton.onclick = function() {
	setGradient()
}
gradientType.addEventListener("option", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);