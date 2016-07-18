var ball = (function(){
	var ballRadius = 7;
		//declare platformWidth again to not polute global scope?
		platformWidth = 70;
		initX = platform.x + platformWidth/2;
		initY = platform.y - ballRadius;

	var myObject = {}

	myObject.ballShoot = false;

	myObject.x = initX;

	myObject.y = initY;

	myObject.dx = 0;

	myObject.dy = 0;

	myObject.draw = function(){
		canvas.ctx.beginPath();
		canvas.ctx.arc(ball.x, ball.y - 1, ballRadius, 0 , 2 * Math.PI, true);
		canvas.ctx.fillStyle="#003366";
		canvas.ctx.fill();
		canvas.ctx.closePath();
	}

	return myObject;
})()

ball.draw();

// var ballRadius = 7;
// var ballX = platformX + platformWidth/2;
// var ballY = platformY - ballRadius;
// var ballDX = 0;
// // var ballDY = 0;
// // var ballShoot = false;

// 	function createBall(){
// 		ctx.beginPath();
// 		ctx.arc(ballX, ballY - 1, ballRadius, 0 , 2 * Math.PI, true);
// 		ctx.fillStyle="#003366";
// 		ctx.fill();
// 		ctx.closePath();
// 	}
