goog.provide('labyrinth');
goog.require('lime.Director');
goog.require('lime.Scene');

labyrinth.start = function(){

	// set main lime objects for the game (director,scene)
  	this.lime = lime;
  	this.director = new this.lime.Director(document.body,1600,780);
  	this.director.makeMobileWebAppCapable();
  	this.director.setDisplayFPS(false);

  	this.gameScene = new this.lime.Scene();
    this.gameScene.setRenderer(this.lime.Renderer.CANVAS);
    this.director.replaceScene(this.gameScene);

 
  

};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('labyrinth.start', labyrinth.start);