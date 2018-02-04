//https://www.youtube.com/watch?v=RXWO3mFuW-I
var cubes = [20, 20, 20];
var w = 20;
function setup () {
  createCanvas (600, 400);
  cubes [0] == 40;
}

function draw () {
  background (0);


  for (var i = 0; i < 4; i++) {
    stroke (255);
    noFill ();

    ellipse (i * w, 200, cubes [i], cubes [i]);
  }

  for (var i = 0; i < 4; i++) {
    fill (random (text ("r")));
    fill (txt ('r'));
    textSize (10);
    text(cubes[0], 'r');

    rect (100, i * w, cubes [i], cubes [i]);
  }
}
function calc (x, z) {
  var y = x*z;
  return y;
}
console.log(calc (5, 9));
