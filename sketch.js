var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  bgImg = loadImage("assets/bg.jpeg");
  
}

function setup() {
createCanvas(1000,700);

bg = createSprite(500,400,1000,1000)
bg.addImage(bgImg)

player = createSprite(200,500,50,50);
player.addImage(shooterImg);
player.scale = 0.3;
player.debug = false;
player.setCollider("rectangle",0,0,300,300);


}

function draw() {
  background(0); 
  

if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}



drawSprites();
s();

}



function s(){
  if(keyWentDown("space")){
    player.addImage(shooter_shooting);
    bullet.velocityX=5;
  }
  else if(keyWentUp("space")){
    player.addImage(shooterImg);
    bullet.velocityX=5;
  }
}
