var key = (function(){
	document.addEventListener("keydown", function(event){
			
		var key = event.keyCode;
		
		if (key === 37){ 
			platform.moveLeft();
			
			if (ball.fired === false){
				ball.dx = platform.dx;
				console.log(platform.dx, ball.dx);
				ball.updateX();
			}
		} 

		if (key === 39){ 
			platform.moveRight();

			if (ball.fired === false){
				ball.dx = platform.dx;
				console.log(platform.dx, ball.dx);
				ball.updateX();
			}
		}

		if (key === 32 && ball.fired === false){
			ball.fired = true;
			ball.dy = -4;
			ball.dx = Math.floor(Math.random() * (3 - -3 + 1)) + -3;
			ball.fire();
		} 	

	});
})()