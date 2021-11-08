var canvas;
var backgroundImg;
var gameState = 0;
var score = 0;
var form;
var runner, runnerImg1;
var invisibleGround;
var ground;

function preload() {
//bgImg = loadImage("./images/jungle.png");
runnerImg1 = loadImage("player/idle1.png");
//runneranime = loadAnimation("player/dead1.png","player/dead2.png")
//getBackgroundImg();
bg=loadImage("images/jungle.png")
}

function setup() {
  canvas = createCanvas(windowWidth + 300, windowHeight);

  runner = createSprite(width/2 - 630, height/2 + 170, 40, 40);
  runner.addImage("runner",runnerImg1);

  ground = createSprite(width/2 - 630, height/2 + 220, width/2, 20 )

  invisibleGround = createSprite(width/2 - 630, height/2 + 270, width/2, 20 );
  invisibleGround.visible = false;

  game = new Game();

  score = 0;

}

function draw() {
 // if(backgroundImg)
  background(bg);

  runner.collide(invisibleGround);
  
  //gravity
  //runner.y = runner.y + 0.8;


  if(gameState === 0){
    game.start();
    if (keyDown("space") ) {
      runner.velocityY = -12
      }
  }

  if(gameState === 1){
    form.greeting.hide();
    form.input.hide();
    form.playButton.hide();

    
    //runner controls
    
  }




  drawSprites()

}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();
   
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour >= 06 && hour <=18){
      bg = "images/jungle.png";
  }
  else{
      bg = "images/nightjungle-1.png";
  }

  backgroundImg = loadImage(bg);
  
}