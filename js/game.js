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

function init(){

}