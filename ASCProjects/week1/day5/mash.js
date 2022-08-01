lock=5

function mash(){
    result=getHome()
    console.log('you will live in a '+getHome()+', become a '+getjob()+', have a '+getcar()+', travel to '+getTravelCount()+' countries, and have a pet '+getpet())
}
//result=mash()
//console.log(result)

function rnumgen(int){
    let randDecimal = Math.random();
    let randNum = randDecimal * int;
    let randInt = Math.floor(randNum);
    return randInt

}
//let randNum = rnumgen(10);
//console.log(randNum);

function getHome(){
    place=['Mansion','Castle','Shack','House',process.argv[2]]
    if(process.argv[3]==undefined){
        randNum=rnumgen(4)
    }
    else{randNum=rnumgen(5)}
    
    return place[randNum]

}
mash()

function getTravelCount(){
    return rnumgen(100)
    
}

function getpet(){
    flip=rnumgen(2)
    if(flip==1 || process.argv[3]==undefined){    
        pet=['tiger','lizard','cat','dog']
        randNum=rnumgen(4)
        return pet[randNum]}
    else{return process.argv[3]}
}
function getjob(){
    job=['cashier','programmer','scientist','barber']
    randNum=rnumgen(4)
    return job[randNum]
}
function getcar(){
    car=['Lamborghini','Peel P50','Toyota Sprinter','Jeep']
    randNum=rnumgen(4)
    return car[randNum]
}




