/**
 * if, if-else , nested if , switch
 * operator
 * ==, ===, <,> <=, >= ,&&, ||
 */

/**
 *  if(condition){}
 */

// let flag = false;

// if(flag){
//     console.log("The flag is true");
// }

let myNum2 = 20;
// == it validates the values only not the type
// === it validates the value and the type  "both the value and type should be equal.""
/**
 * condition1
 * condition2
 * if(condition1 && condition2){
 * Action to be executed
 * }
 *
 */

// if(myNumber == myString && typeof(myNumber)== typeof(myString)){
//     console.log(`The number is ${myNumber}`);
// }
let myNum = 10;
// if(myNum <5 ){
//     console.log(`My number is ${myNum}`)
// }else{
//     console.log('Condition is not satisified');
// }

// if(myNum < 5){
//     console.log("My number is less than 5");
// } else if(myNum == 5){
//     console.log('My Number is equal to 5')
// } else if (myNum > 5){
//     console.log('My Number is greater than 5');
// }else {
//     console.log('Condition didnt satisified');
// }

/**
 * Switch statment
 * switch(value){
 *   case 'value:
 *        something get executed.
 * }
 */
// break;
let month = 1;

// switch (month) {
//   case 1:
//     console.log("January");
//     break
//   case 2:
//     console.log("Febuary");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   default:
//     console.log("Default getting executed");
// }

let browserName = 'Chrome';

switch(browserName){
    case "Chrome": console.log("Invoke Chrome Browser"); break;
    case "Firefox":
        console.log("Invoke Firefox Browser");
        break;
    case "MSedge":
        console.log("Invoke MSedge Browser");
        break;
}