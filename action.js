var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height -30;
var dx = 2;
var dy = -2;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;


document.addEventListener("keydown", keydownHandler, false);
document.addEventListener("keyup", keydownHandler, false);

function keydownHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = true;
	}
	else if(e.keyCode == 37){
		leftPressed = ture;
	}
}

function keyUpHandler(e) {
	// body...
	if (e.keyCode == 39) {
		righ
	} else {}
}


function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();

	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }


	x += dx;
    y += dy;
}

setInterval(draw, 20);