document.addEventListener('DOMContentLoaded', function(){
	var canvas  = document.getElementById("canvas");;
	var platform, 
		ball;

	createPlatform();
	createBall();



}, false)



function createPlatform(){
	platform = canvas.getContext("2d");
	platform.fillStyle = "#003366";
	platform.width = 50;
	platform.height = 10;
	platform.x = canvas.width/2 - platform.width/2;
	platform.y  = 350;
	
	platform.fillRect(platform.x, platform.y,platform.width,platform.height);

	platform.dx;

	canvas.addEventListener("keydown", movePlatform);

	
};

function createBall(){
    ball= canvas.getContext('2d');
    ball.beginPath();
    ball.fillStyle="#003366";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    ball.arc(95,50,7,0,2*Math.PI,true);
    ball.fill();
}



function movePlatform(event) {
		console.log(platform);
		var key = event.keyCode;

		if (key === 37 || key === 65){
			platform.dx = -5;
			platform.x += platform.dx;
			platform.clearRect(platform.x,platform.y, 100,10);
			platform.fillRect(platform.x, platform.y,50,10);
		}

		if (key === 39 || key === 68){
			platform.dx = 5;
			platform.x += platform.dx;
			platform.clearRect(platform.x,platform.y, -100,10);
			platform.fillRect(platform.x, platform.y,50,10);

			
		}


	};
