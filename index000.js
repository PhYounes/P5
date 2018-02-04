var bubbles = [];
//var bubbles;
// function setup () {
//   createCanvas (400, 400);
//   for (var i = 0; i < 2; ++ i) {
//     var x = random (width);
//     var y = random (height);
//     var r = 100;
//     var b = new Bubble (x, y, r);
//     bubbles.push (b);
//   }
// }

function mouseDragged (){

  var r = 50;
  var b = new Bubble (mouseX, mouseY, r);
  bubbles.push (b);
}


// function mousePressed (){
//   for (var i = bubbles.length - 1; i >= 0 ; -- i) {
//     if (bubbles [i].contains (mouseX, mouseY)) {
//       bubbles.splice (i, 1);
//     }
//   }
// }

// function mousePressed (){
//   for (var i = 0; i < bubbles.length; ++ i) {
//     if (bubbles [i].contains (mouseX, mouseY)) {
//       bubbles.splice (i, 1);
//     }
//   }
// }


// function mousePressed (){
//   for (var i = 0; i < bubbles.length; ++ i) {
//   bubbles [i].clicked ();
//   }
// }

// function setup () {
//   createCanvas (400, 400);
//   for (var i = 0; i < 5; i++) {
//     var x = 1 + 20 * i;
//     var y = 0;
//     // var x = 0;
//     var y = 0;
//     var r = 20;
//     bubbles [i]= new Bubble (x, y, r);
//   }
//
// }
// function mousePressed  () {
//   var r = 40;
//   var b = new Bubble (mouseX, mouseY, r)
//   bubbles [0] = b;
//   // bubbles.push(b)
//   // fill (0, 0, 255);
//   // textSize (24);
//   // text ('colorful!', random (100, 200), random (100, 200));
// }

class Bubble {
  constructor (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
  show () {
    stroke (255);
    strokeWeight (1);
    fill (this.brightness, 125);
    ellipse (this.x, this.y, this.r, this.r);
  }
  move () {
    this.x = this.x + random (5, -5);
    this.y = this.y + random (5, -5);
  }
  // clicked () {
  //   var d = dist (mouseX, mouseY, this.x, this.y);
  //   if (d < this.r) {
  //     this.brightness = 255;
  //   }
  //   this.y = this.y + random (5, -5);
  // }

  changeColor (bright) {
    this.brightness = bright;
  }

  contains (px, py) {
    var d = dist (px, py, this.x, this.y);
    if (d < this.r) {
      return true;
      //this.brightness = 255;
    }else {
      return false;
      //this.brightness = 0;
    }
  }
}

function draw () {
  background (0);
  for (var i = 0; i < bubbles.length; ++ i) {
    if (bubbles [i].contains (mouseX, mouseY)) {
      bubbles [i].changeColor (255);
    }else {
      bubbles [i].changeColor (0);
    }
    bubbles [i].move ();
    bubbles [i].show ();
  }
  if (bubbles.length  > 10) {
    bubbles.splice (0, 1);
  }
}




// var nums = [30, 4, 5, 30, 50, 7];
//
// var num = 80;
// var index = 0;
// var r = 255, g = 255, b = 100;
//
// function setup () {
//   createCanvas (400, 600);
//
//
//
// }
// function draw () {
//   background (0);
//   for (var i = 0; i < nums.length; i++) {
//
//   stroke (r, g, b);
//   noFill (255);
//   ellipse (i * 80 + 50, i * 90 + 70, nums [i], nums [i]);
//   }
// }

// var nums = [60,4,5,217, 0,'rainbow', 'star', 'gift', 'rose', 7];
//
// var num = 80;
// var index = 0;
//
// var r = 255, g = 255, b = 255;
// function setup () {
//   createCanvas (400, 600);
//
//
// }
// function draw () {
//   background (r, 0, b);
//   stroke (r, g, b);
//   ellipse (100, 200, num, num);
//   ellipse (200, 300, nums [0], nums [3]);
//   noFill (255);
//   textSize (32);
//   text ('rainbow', 2, 100);
//   text (nums[index], 200, 80);
// }
// function mousePressed () {
//   index =  index + 1 ;
//   if (index == nums.length) {
//     index = 0;
//     r = 0; g = 255;
//   }
// }
