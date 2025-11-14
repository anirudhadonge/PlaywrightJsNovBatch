/**
 * Math object few mathematical actions
 * Math.round() - Rounds a number to the nearest integer.
 * Math.ceil() - Rounds a number up to the next largest integer.
 * Math.floor() - Rounds a number down to the next smallest integer.
 * Math.trunc() - Removes the decimal part of a number, returning only the integer part.
 * Math.random() - Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
 */

const pi = 3.54149;// 4<--3.54149 -->3

// console.log(Math.round(pi));
// console.log(Math.trunc(pi));
// console.log(Math.ceil(pi));
// console.log(Math.floor(pi));
//console.log(Math.random());
//100 from the database -- any one interger value 
let max = 100;
let min = 1;
console.log(Math.trunc((max-min)*Math.random()+min));