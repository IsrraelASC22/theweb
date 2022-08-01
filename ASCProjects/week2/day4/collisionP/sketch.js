let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
 
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let r=0
let g=0
let b=255
let message=0
let kingImage;
let rookImage;
function preload(){
    rookImage=loadImage("images/rook.png");
    kingImage=loadImage("images/king.png");
}
function setup() {
   createCanvas(500, 500);
   noStroke();
    
   imageMode(CENTER);
}
 
function draw() {
   background(0);
   fill(255,255,255)
   textSize(22);
   text("score:"+message, 10, 30);
 
   fill(r, g, b);
   image(kingImage, enemyXPos, enemyYPos, 50, 50);
 
   fill(255, 0, 0);
   image(rookImage,myXPos, myYPos, 50, 50);
 
   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }
 
   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }
 
   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }
 
   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }
 
   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;
 
   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;
 
   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
 
   }
 
   else {
       //fill(255,255,255);
       //background(0)
       r=random(0,256)
       g=random(0,256)
       b=random(0,256)
       enemyXPos=random(25,475)
       enemyYPos=random(25,475)
       message+=1


   }
}
