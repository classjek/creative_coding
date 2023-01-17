var angle = 0.0;
var offset = 60; 
var scalar = 30; 
var speed = 0.05; 
var col = 5; 

function setup(){
  createCanvas(250, 250);
  background(204);
}

function draw(){
  var x = offset + cos(angle)*scalar
  var y = offset + sin(angle)*scalar;
  ellipse(x, y, 40, 40)
  angle +=speed;
  scalar +=0.1;
  fill(col, 0, 0);
  col +=5;
  if(col > 250){
    col = 5;
  }
}