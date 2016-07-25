var ball = (function(){
	var ballRadius = 7;
		//declare platformWidth again to not polute global scope?
		platformWidth = 70;
		initX = platform.x + platformWidth/2;
		initY = platform.y - ballRadius;

	var myObject = {}

	myObject.fired = false;

	myObject.x = initX;

	myObject.y = initY;

	myObject.dx;

	myObject.dy;

	myObject.draw = function(){
		canvas.ctx.beginPath();
		canvas.ctx.arc(ball.x, ball.y - 1, ballRadius, 0 , 2 * Math.PI, true);
		canvas.ctx.fillStyle="#003366";
		canvas.ctx.fill();
		canvas.ctx.closePath();
	}

	myObject.fireBall = function(){
		console.log('test');
	}

	myObject.updateX = function(){
		myObject.x += myObject.dx;
	}

	myObject.updateY = function(){
		myObject.y += myObject.dy;
	}

	myObject.updateXY = function(){
		myObject.updateY();
		myObject.updateX();
	}

	myObject.fire = function(){

		if (myObject.fired){
			myObject.updateXY();
		} 
		// else if (myObject.fired === false){
		// 	myObject.dy = 0;
		// 	myObject.dx = 0;
		// 	myObject.updateXY();
		// }
	}

	myObject.reload = function(){
		
		myObject.dx = 0;
		myObject.dy = 0;
		myObject.x = initX;
		myObject.y = initY;

	}

	return myObject;
})()
