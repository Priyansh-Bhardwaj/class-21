var fixedRect, movingRect;
var car1,car2

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car1 = createSprite(200, 200, 50, 80);
  car1.shapeColor = "blue";
  car2 = createSprite(600, 200,80,30);
  car2.shapeColor = "pink";
  car1.velocityX = +5;
  car2.velocityX = -5;
  car1.debug=true
  car2.debug=true
}

function draw() {
  background(0,0,0);  
bounceOff(car1,car2)
  
  drawSprites();
}
