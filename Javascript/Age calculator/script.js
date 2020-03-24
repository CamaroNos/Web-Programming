var age = prompt("What is your age?");
var days = age*365;
alert(age + " years is roughly " + days + " days");
//fun code for Expanding google logo on classic google page 
/
var logo = document.querySelector("#hplogo");
setInterval(function(){
	logo.width+=5;
} ,100) /