var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var btn=document.querySelector(".btn");
var body=document.getElementById("gradient");

function setgradient(){
	body.style.background= 
	"linear-gradient(to right,"
	 + color1.value
	 +", "
	 +color2.value 
	 +")"; 
	 css.textContent=body.style.background+";";
}
color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);

btn.addEventListener("click",function(){
	var numlist=[];
	for (var i = 0; i< 6;i++) {
		numlist[i]=randomnumbergene();
		}
 		body.style.background="linear-gradient(to right,rgb("+numlist[0]+","+numlist[1]+","
 		+numlist[2]+"),rgb("+numlist[3]+","+numlist[4]+","+numlist[5]+"))";
});
function randomnumbergene(){
	var num=Math.floor(Math.random()*256);
	return num;
}
