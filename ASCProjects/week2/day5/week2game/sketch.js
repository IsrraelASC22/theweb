let state=0
let score=0

let timer=0
let clock=30
let increment=4
let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let enemyXPosb = 200;
let enemyYPosb = 200;
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let enemyLeftb, enemyRightb, enemyTopb, enemyBottomb;
let Bstep=0
let direction=4
let objectiveX=200
let objectiveY=200
//e=enemy,X or Y or side coord, last letter designates copy
let eXc=500
let eYc=500
let enemyLeftc, enemyRightc, enemyTopc, enemyBottomc;
let Cstep=30
let lock=0
let lockc=0
let lockb=0
let capture=0
let boxXPos=900
let boxYPos=100
let boxBottom;boxTop;boxRight;boxLeft;



function setup() {
   createCanvas(1000, 1000);
   noStroke();
 
   rectMode(CENTER);

}
 function mouseClicked(mouseX,mouseY){
    if ( mouseX> 250 || mouseX < 750 || mouseY > 100 || myBottom < 300) {
 }
else{state=1}
//if ( mouseX> 250 || mouseX < 750 || mouseY > 400 || myBottom < 600){}
//else{state==2}}
 }
function draw() {
    if(state==0){
background(0)
fill(255,255,255)
rect(500,500,500,200)
rect(500,200,500,200)
textSize(100)
fill(0)
text('Difficulty',300,560)
text('Start',400,200)}

if(state==1){
    timer+=1
    if(timer%60==0 && clock!=0){clock-=1}
    if(clock==0 && score!=3){
        background(255,0,0)
        textSize(100)
        text("GAME OVER",200,500)
      
    
    }
    else if(score==3){
       background(0,255,0)
        textSize(100)
        text("YOU WIN!",200,500)
    }
    else{background(0)

    Bstep+=1
    Cstep+=1
    
    
    fill(255,255,255);
    ellipse(500,100,150,150)
    fill(0)
    textSize(60);
    text(clock,467,120);
    fill(255,255,255)
    text('Score: '+score,100,100)
    fill(120,40,20)
   rect(boxXPos,boxYPos,150,150)
   fill(0, 0, 255);
   rect(enemyXPos, enemyYPos, 50, 50);
 
   fill(255, 0, 0);
   rect(myXPos, myYPos, 50, 50);

   fill(0, 255, 0);
   rect(enemyXPosb, enemyYPosb, 50, 50);
   if(enemyXPosb>objectiveX && lockb==0){
    enemyXPosb-=8
}
else if(lockb==0){enemyXPosb+=8}
   if(Bstep==30){
    objectiveX=random(0,1000)
    objectiveY=random(0,1000)

    Bstep=0

}
if(enemyYPosb>objectiveY && lockb==0){
    enemyYPosb-=4}
else if (lockb==0){enemyYPosb+=4}
    //if(direction==0){direction=-4}
    //else if(direction==1){direction=4};
    //Bstep=0;}
   //enemyXPosb=enemyXPosb+direction
    //enemyYPosb=enemyYPosb+random(-3,4)
    fill(255,255,0)    
 rect(eXc,eYc,50,50)
 if(lockc==0){
 if(Cstep>30 && Cstep<60){eXc+=increment}
 else if(Cstep>60 && Cstep<90){eYc+=increment}
 else if(Cstep>90 && Cstep<120){eXc-=increment}
 else if(Cstep>120 && Cstep<150){eYc-=increment}
 else if(Cstep>150){increment+=1;Cstep=30;};}
 
   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
       if(lock!=2){enemyXPos-=2.2}
       //if(lockc!=3){eXc-=2}
   }
 
   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
       if(lock!=2){enemyXPos+=2.2}
       //if(lockc!=3){eXc+=2}
   }
 
   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
       if(lock!=2){enemyYPos-=2.2}
       //if(lockc!=3){eYc-=2}
   }
 
   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
       if(lock!=2){
       enemyYPos+=2.2}
       //if(lockc!=3){eYc+=2}
   }
 
   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;
 
   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;

   enemyLeftb = enemyXPosb - 25;
   enemyRightb = enemyXPosb + 25;
   enemyTopb = enemyYPosb - 25;
   enemyBottomb = enemyYPosb + 25;

   enemyLeftc = eXc - 25;
   enemyRightc = eXc + 25;
   enemyTopc = eYc - 25;
   enemyBottomc = eYc + 25;
 
   boxLeft = boxXPos - 75;
   boxRight = boxXPos + 75;
   boxTop = boxYPos - 75;
   boxBottom = boxYPos + 75;

   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
 
   }
 
   else if(capture==0 || capture==2) {
    if(lock==0){
    enemyXPos=myRight
    enemyYPos=myBottom
    capture=2
   }
}
   if (myLeft > enemyRightb || myRight < enemyLeftb || myTop > enemyBottomb || myBottom < enemyTopb) {
 
}

   else if(capture==0 || capture==1) {
    if(lockb==0){
    enemyXPosb=myLeft
    enemyYPosb=myBottom
    capture=1
    }

}
if (myLeft > enemyRightc || myRight < enemyLeftc || myTop > enemyBottomc || myBottom < enemyTopc) {
 
}

   else if(capture==0 || capture==3){
    if(lockc==0){
    eXc=myLeft
    eYc=myTop
    capture=3
}}
if (myLeft > boxRight || myRight < boxLeft || myTop > boxBottom || myBottom < boxTop) {
 
}

   else {
    if(capture==1){enemyXPosb=900;enemyYPosb=100;lockb=1;capture=0;score+=1}

    else if(capture==2){enemyXPos=900;enemyYPos=100;lock=2;capture=0;score+=1}
    
    else if(capture==3){eXc=900;eYc=100;lockc=3;capture=0;score+=1}
    
    else if(capture==4){enemyXPosb=900;enemyYPosb=100;lock=1;capture=0;score+=1}
}

}
}
}