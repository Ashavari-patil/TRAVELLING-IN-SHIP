var ship, shipImage, sea, seaImage

function preload(){
  seaImage = loadImage ("sea.png");
  shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,400);
  sea = createSprite(50,180,400,20);
  sea.addImage("sea",seaImage)
  ship = createSprite(170,190,100,50);
  ship.addAnimation("ship",shipImage)
  sea.scale = 0.5;
  ship.scale = 0.3;
}

function draw () {
background ("blue")

if ("sea.x > 0"){
  sea.x === width / 2 ;


drawSprites ()
}
}