/**
 * class : is a blueprint for creating objects
 * constructor is declaring using a keyword called "constructor"
 * Access modifiers
 * public
 * private
 * protected
 */

class Person {
    name;
    age;
    isStudent;
    #privateVar;
    //marks;
    // constructor(name, age, isStudent){
    //     this.name = name
    //     this.age = age
    //     this.isStudent = isStudent
    // }


    setMark(marks){
        this.#privateFunction();
        this.marks = marks;
    }

    setPrivateVariable(val1){
        this.#privateVar =val1;
    }

    getPrivateValue(){
        return this.#privateVar;
    }
    
    #privateFunction(){
        console.log("This is private function");
    }
}

let per1 = new Person();
console.log(per1);
per1.name = "Anirudha";
per1.age = 43;
per1.isStudent = false;
per1.setPrivateVariable(10);
console.log(per1.getPrivateValue());
per1.setMark(20);
console.log(per1);
// per1.setMark(20);
// console.log(per1);

// console.log(per1.)
