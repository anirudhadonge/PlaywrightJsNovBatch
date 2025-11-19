/**
 * For Loop
 * While : first thing is the validate the condition then to start the loop
 * Do While
 * For of
 * For in
 */

// let myNumber = 20;
// console.log('I am in While Loop')
// while (myNumber < 20) {
//   console.log(myNumber);
//   myNumber++;
// }
// console.log('I am in Do While Loop')
// do {
//   console.log(myNumber);
//   myNumber++;
// } while (myNumber < 20);

let items =  ['Apple','Banana','Kiwi','Grapes','Oranges','Mango','Cherry','LadyFinger']

let myObject = {
    name:"Anirudha",
    rollNo:7
}
/**
 * Array or a object stores value in a key value pair format
 * key- value
 */
// for of loop : is for iterating the values in an array or object
// for(let a of items){
//     console.log(a);
// }

// for in loop : is for iterating the keys in an array or object
for(let key in myObject){
    console.log(`value for ${key} is ${myObject[key]}`);
}