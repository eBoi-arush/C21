var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

}

function draw() {
  background(0,0,0);  

  if(isTouching(fixedRect,movingRect)){
    text("Touching", 400, 200);
  }
  else{
    text("Not Touching", 400, 200);
  }

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  drawSprites();
}

