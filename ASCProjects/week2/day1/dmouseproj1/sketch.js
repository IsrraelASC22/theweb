function setup() {
    createCanvas(500, 500);
    background(0, 0, 0);
 }
  
 function draw() {
  
 }
  
 function mouseClicked() {
    let size=random(25,100);
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    fill(r, g, b);
  
    ellipse(mouseX, mouseY, size, size);
 }
 