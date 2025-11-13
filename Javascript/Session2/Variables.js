/**
 * Javascript is dynamically Typed language
 * var: It has a global scope (Boundary)
 * let : It has a local scope
 * const: We cannot reassign a value
 * 
 * Syntax
 * <var/let/const> <variable name>;
 * ES2015 -- let /const
 */

/**
 * CTRL+/
 */

// var myNumber; // var keyword is not recommended
// let yourNumber;
// const constValue=10;

// if(true){
//  var varVariable = 10;
//  console.log('inside scope :'+varVariable);
//  let letVariable = 6;
//  console.log('inside scope :'+letVariable);
// }


// varVariable = varVariable +10;
// console.log('outside scope :'+varVariable);
// letVariable = letVariable + 5;
// console.log('outside scope :'+letVariable);


let myNumber;
const constNumber=5;
myNumber = 10;
//console.log(myNumber);
myNumber = 15;
console.log(myNumber);
console.log(constNumber);
constNumber = 10;
console.log(constNumber);