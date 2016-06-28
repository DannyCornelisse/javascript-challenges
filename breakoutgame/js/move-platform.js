document.addEventListener('DOMContentLoaded', function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d"); 
	var platformWidth = 50;
	var platformHeight = 10;
	var platformX = canvas.width/2 - platformWidth/2;
	var platformDX = 5;
	var platformY = 350;
	var ballRadius = 7;
	var ballX = platformX + platformWidth/2;
	var ballY = platformY - ballRadius;
	var ballDX = 0;
	var ballDY = 0;
	var ballShoot = false;
	var brickHeight = 12;
	var brickWidth = 40;
	var brickMargin = 12; //all sides
	var brickXY = [{x:20, y:20}];
	var brickY = 20;
	var bricks = [];


	document.addEventListener("keydown", movePlatform);
	(function initBricks (){
		for (var i = 1; i < 35; i++){
			var x;
			var y;
			var coordinates = {};
			var row;
			
			x = brickXY[i-1].x + brickWidth + brickMargin;
			y = brickXY[i-1].y;
			if(brickXY[i-1].x + 2*brickWidth + 2*brickMargin >= canvas.width){
				y = brickXY[i-1].y + brickHeight + brickMargin;
				x = 20; 
			}

			coordinates = {x,y};
			brickXY.push(coordinates);
		}
	})()
	console.log(brickXY);

	setInterval(drawObjects, 20);

	function drawObjects (){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		createRect(platformX, platformY, platformWidth, platformHeight, "#003366");
		createBall();
		if(ballShoot === true){
			moveBall();
		}
		var brickslength = brickXY.length;
		for (var i = 0; i < brickslength; i++) {
			createRect(brickXY[i].x, brickXY[i].y, brickWidth, brickHeight, "#003366");
		}
		
	}
	
	function createRect(X, Y, width, height, color){
		ctx.beginPath();
		ctx.fillRect(X, Y, width, height);
		ctx.fillStyle = color;
		ctx.fill();
    	ctx.closePath();
	}

	function createBall(){
		ctx.beginPath();
		ctx.arc(ballX, ballY - 1, ballRadius, 0 , 2 * Math.PI, true);
		ctx.fillStyle="#003366";
		ctx.fill();
		ctx.closePath();
	}

	function movePlatform(event){
		var key = event.keyCode;

		if (key === 37 || key === 65){
			if (platformX === 0){
				platformDX = 0;
				//move ball along with platfprm when ball isn't moving
				if (ballShoot === false){
					ballDX = platformDX;
					ballX -= ballDX;
				}
			} else {
				platformDX = 7;
				if (ballShoot === false){
					ballDX = platformDX;
					ballX -= ballDX;
				}
			}
			platformX -= platformDX;
		}

		if (key === 39 || key === 68){
			if (platformX + platformWidth === canvas.width){
				platformDX = 0;
				if (ballShoot === false){
					ballDX = platformDX;
					ballX += ballDX;
				}
			} else {
				platformDX = 7;
				if (ballShoot === false){
					ballDX = platformDX;
					ballX += ballDX;
				}
			}
			platformX += platformDX;
		}

		if (key === 32) {
			if (ballShoot === false) {
				ballDX = Math.floor(Math.random() * (6 - -6 + 1)) + -6;
				ballDY = -4;
				ballShoot = true;
			} else if (ballShoot === true) {
				ballX = platformX + platformWidth/2;
				ballY = platformY - ballRadius;
				ballDX = 0;
				ballDY = 0;
				ballShoot = false;
			}
		}
	}

	function moveBall(){
		ballX += ballDX;
		ballY += ballDY;
		//bounce ball against walls
		if (ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0){
			ballDX = -ballDX;
		} 
		//bounce ball ceiling
		if (ballY - ballRadius <= 0 && ballDY <= 0){
			ballDY = -ballDY;
		}
		// bounce ball on platform
		if (ballY + ballRadius >= platformY 
			&& ballY + ballRadius <= platformY + platformHeight 
			&& ballX >= platformX 
			&& ballX <= platformX + platformWidth){
			ballDY = - ballDY;
		}
		//ball is below platform
		if (ballY - ballRadius >= platformY + platformHeight) {
			console.log("game over");
			ballShoot = false;
			ballDY = 0;
			ballDX = 0;
			// reload ball after 1 second
			setTimeout(function(){
				ballX = platformX + platformWidth/2;
				ballY = platformY - ballRadius;
			},1000); 
		}
	}
}, false);