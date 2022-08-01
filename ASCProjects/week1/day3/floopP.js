//let students=['Kidus', 'Aum', 'David', 'Jhon','Jadyn','Jordan']
//let desc=['cool','nice','interesting','awesome','incredible','hardworking']
//let students=['s','e','i','p','p',' ','e','t','u','c']

//for (let i =0; i<5; i++) {for (let j=0; j<5; j++){
 //   console.log(i,j);}}
//let input1=process.argv[2];
let input1=process.argv[2];


if(input1>=90 && input1<=100){console.log('Grade: A - Nice!')}
if(input1>=80 && input1<90){console.log('Grade: B - Good work, keep at it')}
if(input1>=70 && input1<80){console.log('Grade: C - Please try harder')}
if(input1>=60 && input1<70){console.log('Grade: D - Please try harder')}
if(input1>=0 && input1<60){console.log('Grade: F - Come see me :(')}
if(input1<0 || input1>100){console.log('Score out of range...')}
if (false &&(input1>=0 && input1<=0)){console.log('please enter a numeric value.')}
else(console.log('empty response....'))