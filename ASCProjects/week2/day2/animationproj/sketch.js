flip=0
let yPos = 25;
let xPos= 250;
let r=0
let g=255
let b=0
speed=3
 
function setup() {
   createCanvas(500, 500);
   background(0);
}
function mouseClicked(){
    r=random(0,256);
    g=random(0,256);
    b=random(0,256);
    yPos=25
    background(0)
    speed=random(1,20)

} 
function draw() {
   background(0, 20);
 
   fill(r, g, b);
   if (yPos > 525) {
    xPos = -100
    flip=2
    yPos=250
    
}
   if(xPos >525){
    yPos=-100
    flip=0
    xPos=250
    
}
   ellipse(xPos, yPos, 50, 50);
 
    if(flip==0){
        yPos += speed;
    }
    else if(flip==2){   
        yPos=250 
        xPos+=speed;
    }
 

   }
        

   


