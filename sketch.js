var button1, button2, button3; 
var button4, button5, button6; 
var sixth, seventh, eight;
var bg;
var form;

function preload() {
 
 bg = loadImage("mathImg.jpeg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  form = new Form();

  
  
  
}

function draw() {
  background(bg); 


 
  
 
 
 form.display();
 
  drawSprites();
}

