
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(1000,635)
  
  //crear sprite de Trex
 trex=createSprite(50,180,20,50)
 trex.addAnimation("running", trex_running);

 trex.scale=0.5
 trex.x=50

 ground=createSprite(700,206,3000,8);

 trex.velocityX=0
 trex.velocityY=0

}
function draw(){
  background("white")
  if (keyDown("space")){
    trex.velocityY=-10;}
    trex.velocityY=trex.velocityY+0.8
    trex.collide(ground)
  drawSprites ();
}
