/**
 * For loop
 * forEach()
 * map()
 * filter() 
 */


let items =  ['Apple','Banana','Kiwi','Grapes','Oranges','Mango','Cherry','LadyFinger']
let fruits = ['Apple','Banana','Kiwi','Grapes','Oranges','Mango','Cherry'];
/**
 * Apple - 0
 * Banana - 1
 * 
 */
// for(let index = Initial Value ; condition ; incrementing/decrementing){body}

// for(let index =20 ; index>=0;index--){
//     console.log(index);
// }

// fruits.forEach((value,index, fruits)=>{
//     console.log(`${value} is at ${index} index in "${fruits}" array`);
// })

// let newArray = fruits.map((value)=>{
//             return value+"-"
// })

// console.log(newArray);
// console.log(fruits);


// let myNumbers = [3,5,35,89,0,-1,-56]


// let myNewNumbers = myNumbers.filter((value)=>{
//     return value>20;
// })

// console.log(myNewNumbers);

let filteredItems = items.filter((value)=>{
        return fruits.includes(value);
})

console.log(filteredItems);