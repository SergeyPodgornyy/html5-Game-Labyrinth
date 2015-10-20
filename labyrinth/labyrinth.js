goog.provide('labyrinth');
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Sprite');
goog.require('labyrinth.Frog');

// constants for directions
var NORTH = 1;
var EAST  = 2;
var SOUTH = 3;
var WEST  = 4;

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
    this.frog = new labyrinth.Frog().setPosition(90,690);
    this.walls = [];
    this.badges = [];
    this.createWalls();

    // create game buttons
    var analogStick = new this.lime.Sprite().setSize(350,372).setPosition(1150,400).setFill('img/analogStick.png').setAnchorPoint(0,0);
    var buttonUp = new this.lime.Sprite().setSize(120,120).setPosition(1265,400).setAnchorPoint(0,0);
    var buttonRight = new this.lime.Sprite().setSize(115,114).setPosition(1384,518).setAnchorPoint(0,0);
    var buttonDown = new this.lime.Sprite().setSize(120,120).setPosition(1265,631).setAnchorPoint(0,0);
    var buttonLeft = new this.lime.Sprite().setSize(115,114).setPosition(1151,518).setAnchorPoint(0,0);



    // add objects to the main game scene
    this.gameScene.appendChild(gameBackground);
    for (var i=0;i<this.walls.length;i++) {
        this.gameScene.appendChild(this.walls[i]);
    }
    this.gameScene.appendChild(this.frog);
    this.gameScene.appendChild(analogStick);
    this.gameScene.appendChild(buttonUp);
    this.gameScene.appendChild(buttonRight);
    this.gameScene.appendChild(buttonDown);
    this.gameScene.appendChild(buttonLeft);

    // set the scene
    this.director.replaceScene(this.gameScene);

};

labyrinth.createWalls = function(){
    t = 30;
    var walls = [];
    var wallCoordinates = [
        [0,0,35*t,t],
        [0,0,t,26*t],
        [35*t,0,36*t,26*t],
        [0,25*t,36*t,35*t],
        [0,25*t,36*t,35*t],
        [0,10*t,5*t,11*t],
        [5*t,5*t,16*t,6*t],
        [15*t,5*t,16*t,11*t],
        [15*t,5*t,16*t,11*t],
        [15*t,10*t,21*t,11*t],
        [20*t,10*t,21*t,16*t],
        [5*t,15*t,21*t,16*t],
        [10*t,10*t,11*t,16*t],
        [5*t,20*t,11*t,21*t],
        [5*t,20*t,6*t,26*t],
        [15*t,15*t,16*t,26*t],
        [20*t,0*t,21*t,6*t],
        [25*t,5*t,36*t,6*t],
        [25*t,5*t,26*t,11*t],
        [30*t,10*t,36*t,11*t],
        [30*t,10*t,31*t,16*t],
        [25*t,15*t,30*t,16*t],
        [25*t,15*t,26*t,20*t],
        [20*t,20*t,26*t,21*t],
        [30*t,20*t,31*t,26*t]
    ];
    for (var i=0;i<wallCoordinates.length;i++) {
        var current = wallCoordinates[i];
        var wall = new this.lime.Sprite().setAnchorPoint(0,0).setPosition(current[0],current[1]).setSize(current[2]-current[0],current[3]-current[1]).setFill('#222222');
        this.walls.push(wall);
    }
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('labyrinth.start', labyrinth.start);