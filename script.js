var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var randomizer= document.querySelector("#randomizer");
var randcolarr=[[],[],[]]


window.onload=setGradient()

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandom() {
// have 3 arrays with 2 values each rgb 
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 2; j++) {

			var randcol=Math.floor(Math.random()*255);
			
			randcolarr[i][j]=randcol;
		}
	}
// use these arrays to set random colors
	body.style.background = "linear-gradient(to right, " + "rgb(" + randcolarr[0][0] + "," + randcolarr[1][0] + "," + randcolarr[2][0] + ")" + ", " + "rgb(" + randcolarr[0][1] + "," + randcolarr[1][1] + "," + randcolarr[2][1] + ")" 
	+ ")";

//need to convert to hexadecimal but pc breaks when i try to convert rgb to hexadecimal so going to try another route. Didn't work :/


//text content

css.textContent = body.style.background + ";";



}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomizer.addEventListener("click", setRandom)


