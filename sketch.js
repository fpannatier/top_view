//var h = 17;

function setup() {
  createCanvas(600,600);
  createP('Temperatur').position(30,600);
  sliderTemp = createSlider(-30,40,5)
  sliderTemp.position(0,640);
  createP('Windrichtung').position(263,600);
  sliderWind = createSlider(0,630,0);
  sliderWind.position(240,640);
  createP('Windgeschwindigkeit').position(465,600);
  sliderSpeed = createSlider(0,17,10);
  sliderSpeed.position(470,640);
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

  //console.log(alti);
  //console.log(mouseX);

}

function draw() {
  windDir = sliderWind.value();
  windSpe = sliderSpeed.value();
  temp = sliderTemp.value();
  alti = map(mouseX,0,width,0,17);
  r = map(temp,-30,40,0,255);
  b = map(temp,-30,40,255,0);
  background(255);
  push();
  translate(300,300);
  rotate(windDir/100);
  fill(r,70,b,20);
  noStroke();
  for(var h=windSpe; h>=0; h--){
    raster(h);
  }
  pop()
}
