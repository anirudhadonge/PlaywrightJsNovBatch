/**
 * Sharing of items between files using modules
 * 1. CommonJs
 * 2. ESModules
 *   a. Default Export :  "export default" ,  you can import it with any name ,  you can have only one default export
 *   b. Named Export: When only "export" Keyword is used , When Importing you need import with same name as export
 * 
 */
import tutor, { Bus } from "../Session10/Inheritance.js";
import  sum from "../Session10/functionExport.js";
// const Vehicle = require('./../Session10/Inheritance.js')
// const Bus = require('./../Session10/Inheritance.js')
class Car extends tutor {
  constructor(height, wheelbase, brandName, maxSpeed) {
    super(height, wheelbase,maxSpeed);
    this.brandName = brandName;
    }

    speed(){
      console.log("Max Speed of Car is "+this.maxSpeed);
    }
}

let c1 = new Car(1650, 4334, "Verna", 240);
console.log(c1);
c1.speed()

let bus = new Bus();
console.log(bus);


sum(4,5);