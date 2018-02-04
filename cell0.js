function Cell (x, y, w) {
  this.x = x;
  this.y = y;
  this.w = w;
}
Cell.prototype.show = function () {
  stroke (0);
  noFill ();
  rect (this.x, this.y, this.w, this.w);
}
Cell.prototype.cols = function () {
  stroke (0);
  this.r = 0;
  this.g = 0;
  this.b = 200;
  fill (this.r, this.g, this.b);
  rect (this.x, this.y, this.w, this.w);
}
