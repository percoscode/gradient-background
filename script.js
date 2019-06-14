var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomizeBackground");

function changeGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor(){
	return '#' + (Math.floor(Math.random()*0xFFFFFF<<0)).toString(16);
}

function randomizeGradient(){
	color1.value = randomColor();
	color2.value = randomColor();
	changeGradient();
	console.log(color1.value);
	console.log(color2.value);
}

changeGradient();

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
button.addEventListener("click", randomizeGradient);