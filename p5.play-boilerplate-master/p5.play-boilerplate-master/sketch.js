//I reduced the width of the canvas* so it would fit the size of my laptop. 
//I also changed the wall's position to corrospond.
//*from the dimensions the instructions gave as guidelines.

var car,wall;

var speed, weight; 

function setup() {

  createCanvas(1300,400);

  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(50,200,50,50);   

  car.velocityX = speed;

  car.shapeColor=color(255);

    wall=createSprite(1100,200,60,height/2)
    wall.shapeColor=color(80,80,80)
}

function draw() {

  background(10);

  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
  }

  if(deformation>180) {
    car.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100) {
    car.shapeColor=color(230,230,0);
  }

  if(deformation<100) {
    car.shapeColor=color(0,255,0);
  }

  drawSprites();

  }