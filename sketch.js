var pos = 10;
var dato = 1;


function mouseWheel(event) {
  //println(event.delta);
  pos += event.delta;
  posRev = height - 10 - pos;
}

function scrollDown(){
  
  textSize(18);
  textFont("Helvetica");
  fill(255);
  text("SCROLL", 22, 130);
  text("DOWN", 22, 150);
  text("↓", 22, 170);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  

}
function draw(){

noStroke();
  background(255, 170, 0);

scrollDown();

  pos = pos + dato;


    if (pos <= 25) {
    dato = 0.05;
    pos+=0.05;
  }

if (pos >= width - 300) {

    dato = -3;
    pos-=3;
  }
  
  fill(255);
  rect(width/2, pos, 20, 200);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}