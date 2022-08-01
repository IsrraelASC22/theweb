let high=process.argv[2];
let low=process.argv[3];
let randDecimal = Math.random();
let randNum = randDecimal * (high-low+1)+low;
let randInt = Math.floor(randNum);

console.log('Random Number:'+randInt)
//let randDecimalb = Math.random();
//let randNumb = randDecimalb * 5;
//let randIntb = Math.floor(randNum);


//let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];
 
//let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

//console.log('Your lucky day is:'+days[randInt])
//console.log(reactions[randIntb])


//let result=randInt+randIntb

//console.log("Random Number #1:", randInt);
//console.log("Random Number #2:", randIntb);
//console.log('Sum:'+randInt+'+'+randIntb+'='+result);