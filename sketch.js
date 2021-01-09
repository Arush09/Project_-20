var car,wall;
var speed,weight;

function setup() {
speed=random(55,90);
weight=random(400,1500);
  createCanvas(1600,400);
  car=createSprite(50,200, 50, 50);
  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("lightgrey");
  car.velocityX = speed;

  if(wall.x-car.x<(car.width+wall.width)/2){
    speed=0;
    var deformation=0.5 *weight *speed *speed/2;
    if (deformation>180){
      car.shapeColor=color("red");
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color("yellow");
    }
    if(deformation<100){
      car.shapeColor=color("red");
    }
  }
    
  drawSprites();
}