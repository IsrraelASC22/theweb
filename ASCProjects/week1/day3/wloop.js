//Task 1: write a while loop that counts down from 100-0.
let num=100
console.log(num)
while(num!=0){num-=1,console.log(num)}

//task 1b:Modify the countdown loop from Part 1a to have 
//the loop count down from a number inputted by the user.

let final=process.argv[2];
console.log(final);
while(final>0){final-=1,console.log(final)}

//Part 2
//Q1: 3 times
//Q2:infinite
//Q3:6 times
//Q4:4 times
//Q5:fix the faulty while loop to make it print 10 times.
let num=0
while (num<10){console.log('a');num++}

//Part 3:Write a program that would continually generate 2 random integers between 0 and 10 (inclusive).
//The program would end after it generates two of the same random integer.
while(true){
    let randDecimal = Math.random();
    let randNum = randDecimal * 5;
    let randInt = Math.floor(randNum);
    let randDecimalb = Math.random();
    let randNumb = randDecimalb * 5;
    let randInt2 = Math.floor(randNumb);
    console.log('1st random number:'+randInt,'2nd random number:'+randInt2)
    if(randInt==randInt2){console.log('Same numbers!');break}

//Part 3b:Modify your program from Part 3a to output the number of tries it took to generate 2 of the same
//random integer.

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
