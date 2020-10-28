var fixedRect, movingRect;
var square,ball;
var car,bike;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  square= createSprite(200,300,20,20);
  square.shapeColor = "blue";
  ball = createSprite(100,200,30,35);
  ball.shapeColor="yellow";
  car= createSprite(100,100,30,50);
  car.velocityX= 4
  bike = createSprite(700,100,30,20);
  bike.velocityX=-4
  car.shapeColor="orange";
  bike.shapeColor="purple";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;




  if(isTouching(car,bike))
  {

    movingRect.shapeColor = "yellow";
  ball.shapeColor = "red";
  car.shapeColor = "red";
  bike.shapeColor = "red";
  }
  else
  {

    movingRect.shapeColor = "green";
  square.shapeColor = "green";
  car.shapeColor = "green";
  bike.shapeColor = "yellow";
  }
  drawSprites();
}

