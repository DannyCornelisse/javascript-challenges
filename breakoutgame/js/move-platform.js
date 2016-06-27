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

	document.addEventListener("keydown", movePlatform);

	createPlatform();
	createBall();
	
	function createPlatform(){
		ctx.beginPath();
		ctx.fillRect(platformX, platformY, platformWidth, platformHeight);
		ctx.fillStyle = "#003366";
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
			} else {
				platformDX = 5;
			}
			platformX -= platformDX;
			ctx.clearRect(platformX, platformY, platformWidth + platformDX,platformHeight);
			createPlatform();
		}

		if (key === 39 || key === 68){
			if (platformX + platformWidth === canvas.width){
				platformDX = 0;
			} else {
				platformDX = 5;
			}
			platformX += platformDX;
			ctx.clearRect(platformX, platformY, -platformWidth + platformDX, platformHeight);
			createPlatform();
		}

		if(key === 32 && ballShoot === false) {
			ballDX = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
			ballDY = Math.floor((Math.random() * 10) + 1);
			setInterval(moveBall,75)
			ballShoot = true;
		}

	}

	function moveBall(){
		ballX += ballDX;
		ballY -= ballDY;
		createBall();

	}

}, false);







// function createBall(){
//     ball = canvas.getContext('2d');
//     ball.beginPath();
//     ball.fillStyle="#003366";
//     ball.radius = 7
//     ball.startx = platform.x + platform.width/2;
//     ball.starty = platform.y - ball.radius;
//     ball.arc(ball.startx, ball.starty, ball.radius, 0 , 2 * Math.PI, true);
//     ball.fill();
//     ball.dx = 0;
//     ball.dy = 0;
// }



// function movePlatform(event) {
// 	var key = event.keyCode;
// 	//console.log(key);

// 	if (key === 37 || key === 65){
		
// 		if (platform.x===0){
// 				platform.dx = 0;
// 			} else {
// 				platform.dx = -5;
// 				console.log(ball.dx, ball.dy);
// 			}
			
// 		platform.x += platform.dx;
// 		//console.log(platform.x);
// 		platform.clearRect(platform.x, platform.y, platform.width-platform.dx ,platform.height);
// 		platform.fillRect(platform.x, platform.y, platform.width, platform.height);
		
// 	}

// 	if (key === 39 || key === 68){
		
// 		if (platform.x+platform.width===canvas.width){
// 			platform.dx = 0;
// 		} else {
// 			platform.dx = 5;	
// 		}
		
// 		platform.x += platform.dx;
// 		platform.fillRect(platform.x, platform.y, platform.width, platform.height);
// 		platform.clearRect(platform.x, platform.y, -platform.width+platform.dx, platform.height);
// 	}

// 	if (key===32){
// 		shootBall();
// 	} 
// };


// function aimBall(){
// 	console.log('test');

// }
// function shootBall(){

// }

// function moveBall(){
	
// };