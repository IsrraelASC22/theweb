function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
    Sswitch=1

 }
  
 function draw() {
   fill(0)
   square(0,0,100)
   fill(255,255,255)
   text("Clear Canvas",10,50)
   let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let opacity = random (120, 180);
    fill(r, g, b, opacity);
    noStroke();
  
    let size = random(5, 35);
    let offSetX = random(-25, 25);
    let offSetY = random(-25, 25);
   if(mouseX>0 && mouseX<100 && mouseY>0 && mouseY<100){
      
   }
    else{
    if(Sswitch==1) {
      ellipse(mouseX + offSetX, mouseY + offSetY, size, size);
   }
   else if(Sswitch==2){square(mouseX + offSetX, mouseY + offSetY, size);}
   //else if(Sswitch==3){
   else{   
   triangle(mouseX + offSetX+random(1,20), mouseY + offSetY+random(1,20), mouseX + offSetX+random(1,20), mouseY-random(1,20) + offSetY, mouseX-random(1,20) + offSetX, mouseY + offSetY)
   }   
 }
}
  
 function mouseClicked() {
   if(Sswitch==3){Sswitch=0} 
   Sswitch+=1
   if(mouseX>0 && mouseX<100 && mouseY>0 && mouseY<100){
      background(255,255,255)
   } 
 }
 