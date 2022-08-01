//task1
//command: node parameter.js ----your number here----
//choose any number
function evenorodd(num){
    console.log('Your number is:',num);
    let result=num%2;
    if(result==0){console.log(num,'is even')}
    else{console.log(num,'is odd')};
}
//COMMAND
//evenorodd(process.argv[2])

//task2
function divis(dividend,divisor){
    let quotient=dividend%divisor
    if(quotient==0){console.log(dividend,'is divisible by',divisor)}
    else{console.log(dividend,'is not divisible by',divisor)}
}
//COMMAND
// divis(process.argv[3],process.argv[4])

//task3
function dcalc(name1,x1,y1,name2,x2,y2){
    resultx=x2-x1
    resulty=y2-y1
    resultx=resultx**2
    resulty=resulty**2
    resultfinal=resultx+resulty
    
    console.log(name1,'and',name2,'are',Math.sqrt(resultfinal),'apart')
}
//COMMAND
//dcalc(process.argv[2],process.argv[3],process.argv[4],process.argv[5],process.argv[6],process.argv[7])

//task4
function arrayhand(array){
    for(let i=0;i<=array.length;i++){if(typeof(array[i])=='string'){console.log(array[i])}}
}
arrayhand([1,'a',2,'b',3,'c'])