function setup() {
    createCanvas(500, 500);
    background(0,0,0);
    r=255
    g=0
    b=0
    rb=0
    gb=255
    bb=0
    rc=0
    gc=0
    bc=255
    q=0
    a=255
    noStroke()
 }
 function mouseClicked(){
    r=random(0,256)
    g=random(0,256)
    b=random(0,256)
    rb=random(0,256)
    gb=random(0,256)
    bb=random(0,256)
    rc=random(0,256)
    gc=random(0,256)
    bc=random(0,256)
 }
  
 function draw() {
   // q+=1
    background(0,0,0)
   // if(q==100){
     //   background(0,0,0);
      //  q=0
    
//    }
   
  //  a-=1
    //if(a==0){
   //     a=255
    //}
    
    fill(r,g,b,a)
    square(mouseX,100,80)
    fill(rb,gb,bb,a)
    square(mouseX,200,80)
    fill(rc,gc,bc,a)
    square(mouseX,300,80)
    
 }
