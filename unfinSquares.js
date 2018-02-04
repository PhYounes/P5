var squares = [];
function setup () {
  createCanvas (600, 600);
  background (0);
}
 function draw () {
  for (var i = 0; i < 4; ++ i) {
   for (var j = 0; j < (4-i); ++ j) {
     x = i * 30;
     y = j * 30;
     rect (x, y, 30, 30);
   }
 }
   for (var i = 4; i < 8; ++ i) {
    for (var j = 0; j <= i - 4; ++ j) {
      x = i * 31;
      y = j * 30;
      rect (x, y, 30, 30);
    }
  }
  for (var i = 0; i < 4; ++ i) {
   for (var j =  i + 4; j < 8; ++ j) {
     x = i * 30;
     y = j * 31;
     rect (x, y, 30, 30);
   }
 }
   for (var i = 4; i < 8; ++ i) {
    for (var j = 4; j < 8; ++ j) {
      x = i * 31;
      y = j * 31;
      rect (x, y, 30, 30);
    }
  }
}
