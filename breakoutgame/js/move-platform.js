document.addEventListener('DOMContentLoaded', function(){
	var canvas  = document.getElementById("canvas");
	var ctx;
	var platform; 
	var ball;

	createPlatform();
	createBall();


}, false)



function createPlatform(){
	ctx= canvas.getContext("2d");
	ctx.fillStyle = "#003366";
	ctx.width = 50;
	ctx.height = 10;
	ctx.x = canvas.width/2 - ctx.width/2;
	ctx.y = 350;
	
	ctx.fillRect(ctx.x, ctx.y,ctx.width,ctx.height);

	ctx.dx;

	canvas.addEventListener("keydown", movePlatform);
	
};

function createBall(){
    ball = canvas.getContext('2d');
    ball.beginPath();
    ball.fillStyle="#003366";
    ball.radius = 7
    ball.startx = platform.x + platform.width/2;
    ball.starty = platform.y - ball.radius;
    ball.arc(ball.startx, ball.starty, ball.radius, 0, 2*Math.PI, true);
    ball.fill();
    ball.dx = 0;
    ball.dy = 0;
}



function movePlatform(event) {
	var key = event.keyCode;
	//console.log(key);

	if (key === 37 || key === 65){
		
		if (platform.x===0){
				platform.dx = 0;
			} else {
				platform.dx = -5;
				console.log(ball.dx, ball.dy);
			}
			
		platform.x += platform.dx;
		//console.log(platform.x);
		platform.clearRect(platform.x, platform.y, platform.width-platform.dx ,platform.height);
		platform.fillRect(platform.x, platform.y, platform.width, platform.height);
		
	}

	if (key === 39 || key === 68){
		
		if (platform.x+platform.width===canvas.width){
			platform.dx = 0;
		} else {
			platform.dx = 5;	
		}
		
		platform.x += platform.dx;
		platform.fillRect(platform.x, platform.y, platform.width, platform.height);
		platform.clearRect(platform.x, platform.y, -platform.width+platform.dx, platform.height);
	}

	if (key===32){
		shootBall();
	} 
};


function aimBall(){
	console.log('test');

}
function shootBall(){

}

function moveBall(){
	
};