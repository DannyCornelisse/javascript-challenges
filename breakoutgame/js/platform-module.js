var platform = (function () {
	var platformWidth = 70,
		platformHeight = 10;
	
	var myObject = {};

	// Change in X pos
	myObject.dx;

	//initial x pos
	myObject.x = canvas.element.width/2 - platformWidth/2;

	// initial and fixed y pos
	myObject.y = 350;

	// draw the platform
	myObject.draw = function() {

		canvas.ctx.beginPath();
		canvas.ctx.fillRect(platform.x, platform.y, platformWidth, platformHeight);
		canvas.ctx.fillStyle = "#000";
		canvas.ctx.fill();
		canvas.ctx.closePath();

	}

	//listen for keydown to move platform
	

	myObject.moveLeft = function(){
		
		// if x position is greater than left wall of canvas
		if (!(platform.x <= 0)){
			
			platform.dx = -7;
			platform.x += platform.dx;

		} else {

			platform.dx = 0;
		}

	}

	myObject.moveRight = function(){

		// if x position is greater than left wall of canvas
		if (!(platform.x + platformWidth >= canvas.element.width)){

			platform.dx = 7;
			platform.x += platform.dx;

		} else {

			platform.dx = 0;
		}		
		
	}

	return myObject;

})();

// platform.draw();