
let rollNo = 7;
let Marks = 80;

console.log(" The Roll no "+ rollNo + " and Marks "+Marks);
console.log(" The Roll no ".concat(rollNo).concat(" and Marks ").concat(Marks))
console.log(" The Roll no ".concat(...[rollNo," and Marks ",Marks, " in the class"]));
console.log(`The Roll no ${rollNo} and Marks ${Marks}`);
// let myArray = [rollNo," and Marks ",Marks]
// console.log(...myArray);