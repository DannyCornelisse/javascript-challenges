var platform = (function () {
	var platformWidth = 70,
		platformHeight = 10,
		platformDX = 5
	
	var myObject = {};

	// Change in X pos
	myObject.dx = 5;

	//initial x pos
	myObject.x = canvas.element.width/2 - platformWidth/2;

	// initial and fixed y pos
	myObject.y = 350;

	// move platform left
	myObject.moveLeft = function() {
		myObject.x -= platformDX;
	}

	// move platform left
	myObject.moveRight = function() {
		myObject.x += platformDX;
	}

	myObject.draw = function() {
		canvas.ctx.beginPath();
		canvas.ctx.fillRect(platform.x, platform.y, platformWidth, platformHeight);
		canvas.ctx.fillStyle = "#000";
		canvas.ctx.fill();
		canvas.ctx.closePath();
	}

	// function createRect(X, Y, width, height, color){
	// 	ctx.beginPath();
	// 	ctx.fillRect(X, Y, width, height);
	// 	ctx.fillStyle = color;
	// 	ctx.fill();
 //    	ctx.closePath();
	// }



	return myObject;

})();

platform.draw();