goog.provide('labyrinth.Frog');
goog.require('lime.Sprite');

labyrinth.Frog = function() {

    goog.base(this);

    this.setSize(80,58).setFill('img/mikethefrog.png');
    this.isMoving = false;
    this.direction = NORTH;
    this.speed = 0.3;

};

goog.inherits(labyrinth.Frog,lime.Sprite);

labyrinth.Frog.prototype.startMovement = function(direction) {
  this.isMoving = true;
  this.direction = direction;
}; 
