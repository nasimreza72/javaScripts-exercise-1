// Add answers here 

// #1
const nameOfCity= str => {
    let result = str.substring(0, 3);
    return result.toLowerCase()==='los' || result.toLowerCase()==='new'? str : 'The city name does not begin with Los or New';

}
console.log(nameOfCity('New york'));

// #2

function isDivisible(num){
    return ( num%100==0 ? true : false )
  }
  console.log(isDivisible(1000));
  

//   #4

function isRaining (text){
    return (text ? 'wet day - you need an umbrella!' : 'dry day - leave your umbrella at home!' )
}

console.log(isRaining(false));


// Loops

const missingAngle=(angle1,angle2)=>{
    let angle3=180-angle1-angle2;
    if(angle3<90) return "acute"
    else if(angle3>90) return "obtuse"
    else return "right angle"
    } 

    console.log(missingAngle(110,112));
// #1

function geometricalSequence (){
    let result= 1;
    let text='';
    for(let i=1; i<10; i++){
        text+=result+' ';
        result=result*2;
    }
    return text.trim();
}

console.log(geometricalSequence());

// #2

function multiplesOfThree (){
    let result= '';
    for(let i=3; i<=15; i+=3){
        result+=i+' ';
    }
    return result.trim();
}

console.log(multiplesOfThree());

// ###Math

function powerOf (integer){
    let result=Math.pow(integer,integer)
    return result
}
console.log(powerOf(4));

// #### Problem Solving

const array=['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
const vowelCount=(text)=>{
    let count=0;
    for (let i=0; i < text.length; i++) {
        if(array.includes(text[i]))  count++
 }
    return count

}

console.log(vowelCount('devisable devisable devisable'));



  
// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

