 let myVal = 10;

 /**
  * It is an item which keeps information in the form of key-value pair
  * let <variableName> = {
  *   key: value
  * }
  */

 let person = {
    name:'Anirudha',
    age: 43,
    isStudent: false
 }

 let student ={
    name:'Anirudha',
    age: 43,
    isStudent: false,
    display: function(){
        console.log(" This is a display function");
    }
 }
console.log(person);
// accessing the properties of object or getting the value of the property.

console.log(person.name);
console.log(person['name']);

// assigning a value

//person.name='Avinash';
person['name']= 'Ruturaj'
console.log(person);

student.display();

for(let a in person){
    console.log(`Key ${a} has a value ${person[a]}`)
}

console.log(typeof(person));