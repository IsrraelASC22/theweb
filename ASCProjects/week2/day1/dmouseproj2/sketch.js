function setup() {
    createCanvas(500, 500);
    background(220, 220, 220);
    r=0
    g=0
    b=0
 }
 function mouseClicked(){
    clear();
    r=random(0,256)
    g=random(0,256)
    b=random(0,256)
}

function draw(){
    stroke(r,g,b)
    line(250,250,mouseX,mouseY)
    
}
