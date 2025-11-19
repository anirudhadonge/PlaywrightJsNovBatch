/**
 * Array : Its is a collection of values of same type or different type
 * let <Variable Name> = []
 * homogenous and heterogenous
 * Array is heterogenous
 * Common Methods and Properties
 * 1. Length : property
 * 2. push();
 * 3. Pop()
 * 4. shift()
 * 5. unshift()
 * 6. indexOf()
 * 7. includes()
 * 8. Join()
 * 9. slice()
 * 10. splice()
 * 
 * Iterate array items
 * forEach()
 * map()
 * filter()
 */

let fruits = ['Apple','Banana','Kiwi','Grapes','Oranges','Mango','Cherry'] //hetrogenous collection values 
// console.log(typeof(fruits));
// console.log(fruits);
// fruits[3] = "Orange";
//console.log(fruits);

//Length : the Number of elements present in an array

// console.log(fruits.length);

// push method : It is used to add element at the end of the array list.
// fruits.push("Grapes")
// // console.log(fruits.length);

// console.log(fruits);

// // Remove the last element from array

// let returnedValue = fruits.pop();
// console.log(returnedValue);
// console.log(fruits);

// // Remove the first element 

// returnedValue = fruits.shift()
// console.log(returnedValue);
// console.log(fruits);
// console.log(fruits.length);
// // add the element at the begining 

// fruits.unshift('Apple');
// console.log(fruits.length);
// console.log(fruits);


//let fruits = ['Apple','Banana','Kiwi']

// index of the element

// console.log(fruits.indexOf('Kiwi'));

// console.log(fruits.includes('45'));
// console.log(fruits.includes('Banana'));

//console.log(fruits.join('-'))
//let fruits = ['Apple','Banana','Kiwi','Grapes','Oranges','Mango','Cherry']
// let newArray = fruits.slice(0,-9);
// console.log(newArray);
// console.log(fruits);
// let subFruits = fruits.splice();
// console.log(subFruits);
// console.log(fruits);

//Adding element in between or replacing the existing element
//let fruits = ['Apple','Banana','Kiwi','Grapes','Oranges','Mango','Cherry']
/// ...['watermellon','Papaya'] = 'watermellon','Papaya'
// console.log(fruits);
// console.log(fruits.splice(2,1,'watermellon','Papaya'));
// console.log(fruits);