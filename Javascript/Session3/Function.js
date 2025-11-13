/**
 * Function is a reuseable block of code , which we can invoke whenever required.
 * whenever we are declaring a function we use a keyword "function"
 * syntax 
 * 1. function <functionName> (parameters){<body>}}
 * 2. let <functionName> = function (parameters){<body>}
 * 3. Arrow function : (paramaters)=>{<body>}
 */
/**
 *  Function or a code should not be more than 5 lines
 *  modularize the code i.e create small function and reuse it in the main
1*/


// Function for adding two numbers

// function add(num1,num2){
//     console.log(num1+num2);
// }

// add(5,6);
// add('anirudha','trainer');
// //NaN : not a number
// add();

// function display(){
//     console.log('This is a display function');
// }

// display();

// let add = function(num1,num2){
//     console.log(num1+num2);
// }
// let display = function(){
//     console.log("This is display function");
// }
// console.log(typeof(add));
//display();

// let add = (num1,num2)=>{
//     console.log(num1+num2);
// }
// let display = ()=>{
//     console.log("This is display function");
// }
// add(4,5);
// display();

function add(num1,num2){
    return num1+num2;
}
let sum = add(5,6)
console.log(sum);
// // wherever you call me just add your implementation to it.
// function fun1(fun){
//     fun();
// }

// fun1(()=>{
//     console.log("This is the first implmentation");
// })

// fun1(()=>{
//     console.log("This is the second implmentation");
// })
// let a = 5;
// let b = 6;

// fun1(()=>{
// console.log(a+b);
// })
// fun1(()=>{
// console.log(a-b);
// })