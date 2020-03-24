var secretNumber=4;
var num = Number(prompt("Guess the number?"));

if(num<secretNumber){
	alert("Too low try again");
}
else if(num===secretNumber){
	alert("You guessed!!");
}
else{
	alert("Too high try again");
}