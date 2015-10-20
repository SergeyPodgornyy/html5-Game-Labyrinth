goog.provide('labyrinth');
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Sprite');
goog.require('labyrinth.Frog');

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
    var buttonUp = new this.lime.Sprite().setSize(120,120).setPosition(1265,400).setAnchorPoint(0,0);
    var buttonRight = new this.lime.Sprite().setSize(115,114).setPosition(1384,518).setAnchorPoint(0,0);
    var buttonDown = new this.lime.Sprite().setSize(120,120).setPosition(1265,631).setAnchorPoint(0,0);
    var buttonLeft = new this.lime.Sprite().setSize(115,114).setPosition(1151,518).setAnchorPoint(0,0);



    // add objects to the main game scene
    this.gameScene.appendChild(gameBackground);
    this.gameScene.appendChild(analogStick);
    this.gameScene.appendChild(buttonUp);
    this.gameScene.appendChild(buttonRight);
    this.gameScene.appendChild(buttonDown);
    this.gameScene.appendChild(buttonLeft);

    // set the scene
    this.director.replaceScene(this.gameScene);


};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('labyrinth.start', labyrinth.start);