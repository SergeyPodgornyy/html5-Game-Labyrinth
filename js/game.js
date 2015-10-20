var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

imgFrog = new Image();
imgFrog.src = "img/mikethefrog.png";
imgFrog.addEventListener("load",init,false);

var requestAnimFrame = 
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozReqeustAnimationFrame ||
				window.oReqeustAnimationFrame ||
				window.msReqeustAnimationFrame ||
				function (callback){
					window.setTimeout(callback, 1000/60);
				};

var frogX = 65;
var frogY = 65;

function init(){
	requestAnimFrame(update);
}

function update(){
	context.drawImage(imgFrog, frogX,frogY,100,77);

	context.fillRect(10,10,40,380,"#000");
	context.fillRect(10,10,380,40,"#000");
	context.fillRect(10,350,380,40,"#000");
	context.fillRect(350,10,40,380,"#000");
	context.fillRect(180,10,40,180,"#000");

	requestAnimFrame(update);
}