document.addEventListener('DOMContentLoaded', function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d"); 
	var platformWidth = 70;
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
	var brickXYlength = brickXY.length;
	var brickY = 20;
	var points = 0;

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
	setInterval(drawObjects, 20);

	function updateScore(){
		document.getElementsByClassName("points")[0].innerHTML = points;
		// if (points === 35){}
	};
	
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
			if (platformX <= 0){
				platformDX = 0;
			} else {
				platformDX = 10;
				//move ball along with platfprm when ball isn't moving
				if (ballShoot === false){
					ballDX = platformDX;
					ballX -= ballDX;
				}
			}
			platformX -= platformDX;
		}

		if (key === 39 || key === 68){
			if (platformX + platformWidth >= canvas.width){
				platformDX = 0;
			} else {
				platformDX = 10;
				if (ballShoot === false){
					ballDX = platformDX;
					ballX += ballDX;
				}
			}
			platformX += platformDX;
		}

		if (key === 32) {
			if (ballShoot === false) {
				ballDX = Math.floor(Math.random() * (3 - -3 + 1)) + -3;
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

		var ballRight = ballX + ballRadius;
		var ballLeft = ballX - ballRadius;
		var ballTop = ballY - ballRadius;
		var ballBottom = ballY + ballRadius;
		var canvasWidth = canvas.width;
		var platformRight = platformX + platformWidth;
		var platformLeft = platformX;
		var platformTop = platformY;
		var platformBottom = platformY + platformHeight;

		//bounce ball against walls
		if (ballRight >= canvasWidth || ballLeft <= 0){
			ballDX = -ballDX;
		} 
		//bounce ball ceiling
		if (ballTop <= 0 && ballDY <= 0){
			ballDY = -ballDY;
		}
		// bounce ball on top platform
		if (ballBottom >= platformTop && ballX >= platformLeft && ballX <= platformRight){
			ballDY = - ballDY;

			//make ball bounce more to the left when hitting left side of platform 
			//and more to the right when hitting the right
			if (ballX >= platformLeft && ballX < platformLeft + platformWidth / 2 && ballDX > -4){
				ballDX = ballDX - 1;
			} else if (ballX <= platformRight && ballX >= platformRight - platformWidth / 2 && ballDX < 4){
				ballDX = ballDX + 1;
			}
		}

		//bounce ball off sides of side platform
		// if (ballRight >= platformLeft || ballLeft <= platformRight
		// 	&& ballX < platformLeft && ballX > platformRight) {
		// 	if (ballY > platformTop && ballY < platformTop + platformHeight){
		// 		ballDX = -ballDX;
		// 	}
		// }
		
		for (var i = 0; i < brickXY.length; i++) {
			//bounce on bottom bricks
			if (ballTop <= brickXY[i].y + brickHeight && ballTop > brickXY[i].y 
				|| ballBottom >= brickXY[i].y && ballBottom < brickXY[i].y + brickHeight){
				if( ballX >= brickXY[i].x && ballX <= brickXY[i].x + brickWidth){
					ballDY = -ballDY;
					points++;
					brickXY.splice(i, 1);
				}	
			}
				
		}
		
		//ball is below platform
		if (ballBottom >= platformBottom) {
			console.log("game over");
			ballShoot = false;
			ballDY = 0;
			ballDX = 0;
			var currentPlatformX = platformLeft + platformWidth/2;
			var currentPlatformY = platformTop - ballRadius;
			// reload ball after 1 second
			setTimeout(function(){
				ballX = currentPlatformX;
				ballY = currentPlatformY;
			},1000); 
		}
	}

	function drawObjects (){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		createRect(platformX, platformY, platformWidth, platformHeight, "#003366");
		createBall();
		updateScore();
		if(ballShoot === true){
			moveBall();
		}
		var brickslength = brickXY.length;
		for (var i = 0; i < brickslength; i++) {
			createRect(brickXY[i].x, brickXY[i].y, brickWidth, brickHeight, "#003366");
		}
	}
}, false);