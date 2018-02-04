var bubbles = [];
var img;
function preload () {
  img  = loadImage ('images/flower0.jpg');
}
function setup () {
  createCanvas (500, 500);
  for (var i = 0; i < 30; i++) {
    bubbles [i]   = new Bubble (random (width), random (height));
  }
}
function draw () {
  background (0);
  for (var i = 0; i < bubbles.length; ++ i) {
    bubbles [i].update ();
    bubbles [i].show ();
    for (var j = 0; j < bubbles.length; ++ j) {
      if (i != j && bubbles [i].intersects (bubbles [j])) {
        bubbles [i].changeColor ();
        bubbles [j].changeColor ();
      }
    }
  }
}


function Bubble (x, y) {
  this.x = x;
  this.y = y;
  this.r = 48;
  this.col = color (255);

  this.changeColor = function () {
    this.col = color (random (255), random (255), random (255));
  }
  this.show = function () {
    stroke (255);
    fill (this.col);
    image (img, this.x, this.y, 48, 48);
    //ellipse (this.x, this.y, this.r * 2, this.r * 2);
  }
  this.update = function () {
  this.x = this.x + random (-1, 1);
  this.y = this.y + random (-1, 1);

  }
  this.intersects = function (others){
    var d = dist (this.x, this.y, others.x, others.y);
    if (d < this.r + others.r) {
      return true;
    }else {
      return false;
    }
  }
}
