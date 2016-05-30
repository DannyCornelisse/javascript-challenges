var num1;
var num2;

if (num1 === num2) {

	console.log("These numbers are equal!");

} else if (num1 > num2) {

	alert("number 1 is greater than number 2");

}

var father = {
	job: "web-developer",
	children: 5
}

var mother = {
	job: "house-wife", 
	children: 5
}

console.log("Father has a new job as a " + father.job + ". His wife is a " + mother.job +". they have " + mother.children + " children.")

var i = 5;
while(i<=950) {

	console.log(i);
	
	i=i*4;
	
	if(i>=950) {
		
		console.log("i is greater than 950, namely " + i);
	}
}

