/*cell = x, y, w, h, uncoverred (true, false), populated (true, false), population (number, immage, blank)*/
// function calc (x, z) {
//   var y = x*z;
//   return y;
// }
// console.log(calc (5, 9));
//
// function make2DArray (cols, rows) {
//   var arr = new Array (cols);
//   for (i = 0; i < arr.length; ++ i) {
//     arr [i] = new Array (rows);
//   }
//   return arr;
// }
//
// var grid;
// var cols;
// var rows;
// var w = 20;
// var totalBees = 10;
//
// function setup () {
//   createCanvas (201, 201);
//   cols = floor (width / w);
//   rows = floor (height / w);
//   grid = make2DArray (cols, rows);
//   for (var i = 0; i < cols; ++ i) {
//     for (var j = 0; j < rows; ++ j) {
//       grid[i][j] = new Cell (i, j, w);
//     }
//   }
//
//   // Pick total bees spots
//   for (var n = 0; n < totalBees; ++ n) {
//     var i = floor (random (cols));
//     var j = floor (random (rows));
//     grid[i][j].bee = true;
//   }
//                                               //35:00 mn /*https://www.youtube.com/watch?v=LFU5ZlrR21E*/
//
//
//
//   for (var i = 0; i < cols; ++ i) {
//     for (var j = 0; j < rows; ++ j) {
//       grid[i][j].countBees();
//     }
//   }
// }
// function mousePressed () {
//   for (var i = 0; i < cols; ++ i) {
//     for (var j = 0; j < rows; ++ j) {
//       if (grid [i][j].contains (mouseX, mouseY)) {
//         grid[i][j].reveal ();
//       }
//     }
//   }
// }
//
//  function draw () {
//    background (255);
//    for (var i = 0; i < cols; ++ i) {
//      for (var j = 0; j < rows; ++ j) {
//        grid [i][j].show ();
//      }
//    }
//  }
function logIt () {
  console.log("hello");
}
logIt ();
