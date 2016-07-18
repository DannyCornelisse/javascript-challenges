var bricks = (function(){
	var brickHeight = 12;
		brickWidth = 40;
		brickMargin = 12;
		brickCoordinates = [{x:20, y:20}];
		bricksNumber = 35;

	var myObject = {};

	var calcBricksCoordinates = (function (){
		for (var i = 1; i < bricksNumber; i++){
			var x;
			var y;
			var coordinates = {};
			
			x = brickCoordinates[i-1].x + brickWidth + brickMargin;
			y = brickCoordinates[i-1].y;
			if(brickCoordinates[i-1].x + 2*brickWidth + 2*brickMargin >= canvas.element.width){
				y = brickCoordinates[i-1].y + brickHeight + brickMargin;
				x = 20; 
			}
			coordinates = {x,y};
			brickCoordinates.push(coordinates);
		}
		//return brickNumber = brickCoordinates.length;
	})()

	myObject.draw = function(){
		for (var i = 0; i < bricksNumber; i++) {
			canvas.ctx.beginPath();
			canvas.ctx.fillRect(brickCoordinates[i].x, brickCoordinates[i].y, brickWidth, brickHeight);
			canvas.ctx.fillStyle = "#003366";
			canvas.ctx.fill();
	    	canvas.ctx.closePath();
			// createRect(brickCoordinates[i].x, brickCoordinates[i].y, brickWidth, brickHeight, "#003366");
		}
	}

	return myObject;
})()

bricks.draw();

// var ballShoot = false;
// var brickHeight = 12;
// var brickWidth = 40;
// var brickMargin = 12; //all sides
// var brickXY = [{x:20, y:20}];
// var brickXYlength = brickXY.length;
// var brickY = 20;