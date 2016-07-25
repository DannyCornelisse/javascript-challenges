var canvas = (function () {
	// make empty object to return to global
	var myObject = {};

	// Get element
	myObject.element = document.getElementById("canvas");

	// define context
	myObject.ctx = myObject.element.getContext("2d");

	//update canvas objects
	myObject.drawObjects = function(){
		//clear platform
		myObject.ctx.clearRect(0, 0, canvas.element.width, canvas.element.height);

		bricks.draw();
		platform.draw();
		ball.fire();
		ball.draw();

	}

	//setInterval(canvas.drawObjects, 20);

	// return global object
	return myObject;

})();

setInterval(canvas.drawObjects, 20);