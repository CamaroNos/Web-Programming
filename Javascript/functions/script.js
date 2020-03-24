function isEven(i){
	return (i%2==0);
	
}


function factorial(i) {
	if(i>=1){
		return i*factorial(i-1);
	}
	else{
		return 1;
	}
	
}
function kababtosnake(str){

var newStr=str.replace( /-/g,"_");
return newStr;
}