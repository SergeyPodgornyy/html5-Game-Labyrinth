goog.provide('labyrinth');
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Sprite');

labyrinth.start = function(){

    // set main lime objects for the game (director,scene)
    this.lime = lime;
    this.director = new this.lime.Director(document.body,1600,780);
    this.director.makeMobileWebAppCapable();
    this.director.setDisplayFPS(false);

    this.gameScene = new this.lime.Scene();
    this.gameScene.setRenderer(this.lime.Renderer.CANVAS);

    // set main game objects (frog, walls, badges)
    var gameBackground = new this.lime.Sprite()
                .setSize(1080,780)
                .setPosition(0,0)
                .setFill("#EEEEEE")
                .setAnchorPoint(0,0);

    // create game buttons
    var analogStick = new this.lime.Sprite().setSize(350,372).setPosition(1150,400).setFill('img/analogStick.png').setAnchorPoint(0,0);


    // add objects to the main game scene
    this.gameScene.appendChild(gameBackground);
    this.gameScene.appendChild(analogStick);

    // set the scene
    this.director.replaceScene(this.gameScene);


};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('labyrinth.start', labyrinth.start);