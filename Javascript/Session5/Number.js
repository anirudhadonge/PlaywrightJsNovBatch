/**
 * number type: any number whether is a foalting point number or an integer 
 */

// const pi = 3.14149 // "3.14149"
// console.log(pi.toFixed(3));

// console.log(typeof(pi.toString()))

const pi = "3.14149"
console.log(`${pi} and its type ${typeof(pi)}`)
// converting string into integer number
console.log(parseInt(pi));
console.log(`${pi} and its type ${typeof(parseInt(pi))} and the value is ${parseInt(pi)}`);

// converting string into a floating point number
console.log(parseFloat(pi));
console.log(`${pi} and its type ${typeof(parseFloat(pi))} and the value is ${parseFloat(pi)}`)

// NaN : not a number 

console.log('a'/10);
console.log("This is my 5th session");
