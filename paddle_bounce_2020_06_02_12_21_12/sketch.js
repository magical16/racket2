var ball,img,playerPaddle;

function preload() {
  /* preload your images here of the ball and the paddle */
  ball = loadImage("ball.png");
  playerPaddle = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  ball = createSprite (10,200,10,10);
  /*ball.addImage("bounce", ball);*/
  ball.velocityX= 9;
   
  
 playerPaddle = createSprite (370,200,15,100);
 /*playerPaddle = addImage("player", playerPaddle);*/
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  
  /* create Edge Sprites here */
   edges = createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(playerPaddle);

  
  
  if (ball.x>400){
    reset();
  }

  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  if(keyDown("up")){
    playerPaddle.y = playerPaddle.y-20;
     }
  if(keyDown("down")){
     playerPaddle.y = playerPaddle.y+20;
  }
  
  
  drawSprites();
  
}

function randomVelocity(){
  if (ball.isTouching(playerPaddle)){
   ball.velocityY= 5; 
}
 

  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}
function reset(){
  ball.x = 10
ball.y = 200;
ball.velocityX = 9;
ball.velocityY = 5;
} 