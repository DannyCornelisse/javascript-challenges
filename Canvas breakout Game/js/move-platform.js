document.addEventListener('DOMContentLoaded', function(){
	createPlatform()


}, false)

var canvas;
var platform;

function createPlatform(){
	var canvas = document.getElementById("canvas");
	var platform = canvas.getContext("2d");
	platform.fillStyle = "#003366";
	platform.fillRect(200-20,350,40,10);

	canvas.addEventListener( "keydown", movePlatform, true);

	
};

function movePlatform(event) {

		console.log(event.keyCode);
		var key = event.keyCode;

		if (key === 37 || key === 65){
			//move platform left
		}

		if (key === 39 || key === 68){
			
		}
	};
