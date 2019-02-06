var body=document.getElementById("gradient");
var c1=document.querySelector(".color1");
var c2=document.querySelector(".color2");
var h3=document.querySelector("h3");
var random=document.querySelector(".random");

function setGradient(){
	body.style.background ="linear-gradient(to right, " +c1.value+ ", "+c2.value+ ")";
	h3.textContent=body.style.background +";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

c1.addEventListener("input",setGradient);
c2.addEventListener("input",setGradient);

random.addEventListener("click",function(){
	c1.value=getRandomColor();
	c2.value=getRandomColor();
	setGradient();
})

window.addEventListener("load",setGradient);