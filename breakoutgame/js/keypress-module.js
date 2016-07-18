var key = (function(){
	var myObject = {};

	myObject.code;

	document.addEventListener("keydown", function(){
		return myObject.code = event.keyCode;
	});

	return myObject
})()