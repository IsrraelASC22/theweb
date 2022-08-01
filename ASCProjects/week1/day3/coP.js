//guess=process.argv[2]

//let randDecimal = Math.random();
//let randNum = randDecimal * 101;
//let randInt = Math.floor(randNum);

//console.log('RNG:'+randInt)
//guess=process.argv[2]
//let score=0
//console.log('intial score:'+score)

//if(guess=='A'){score-=1,console.log('what? >:('+'Final score:'+score)}
//else if(guess=='B'){score-=1,console.log('what? >:('+score)}
//else if(guess=='C'){score+=1,console.log('BINGO :D'+score)}
//else if(guess=='D'){score-=50,console.log('terrible! :<'+score)}
//else if(guess=='I,KNOW.THE.SECRET'){score += 1000000,console.log('psh what secret...welcome to NIRVANA'+score)}
//else{console.log('bleep boop invalid response im a robot'+score)}
let num=0
while(true){
let randDecimal = Math.random();
let randNum = randDecimal * 5;
let randInt = Math.floor(randNum);
 
let randDecimalb = Math.random();
let randNumb = randDecimalb * 5;
let randInt2 = Math.floor(randNumb);
console.log('1st random number:'+randInt,'2nd random number:'+randInt2)
num+=1
if(randInt==randInt2){console.log('Same numbers on try #'+num);break}
}


