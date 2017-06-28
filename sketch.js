//var h = 17;

function setup() {
  createCanvas(600,600);
  background(255);

}

function raster(h) {

  //fill(0 ,178,162,90);
  //noStroke();
  //var h = map(mouseX, 0, width, 0,18);

  push();
  rotate(0);
  beginShape();
  vertex (aX[h], aY[h]);
  vertex (bX[h], bY[h]);
  vertex (dX[h], dY[h]);
  vertex (eX[h], eY[h]);
  vertex (fX[h], fY[h]);
  vertex (gX[h], gY[h]);
  vertex (hX[h], hY[h]);
  vertex (iX[h], iY[h]);
  vertex (jX[h], jY[h]);
  vertex (kX[h], kY[h]);
  vertex (lX[h], lY[h]);
  vertex (mX[h], mY[h]);
  vertex (nX[h], nY[h]);
  vertex (oX[h], oY[h]);
  vertex (pX[h], pY[h]);
  endShape(CLOSE);
  pop();

}

function draw() {
  background(255);

  fill(0 ,178,162,80);
  noStroke();
  for(var h=17; h>=0; h--){
    raster(h);
  }
}
