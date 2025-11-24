export default class Vehicle {
  maxSpeed;
  constructor(height, wheelbase,maxSpeed) {
    this.height = height;
    this.wheelbase = wheelbase;
    this.maxSpeed = maxSpeed;
  }

  speed() { // Polymorphism : Ploy - many , morph: forms
    console.log("This is a method of Vehicle Class");
  }
}


export class Bus extends Vehicle{
   constructor(height, wheelbase, maxSpeed) {
    super(height, wheelbase,maxSpeed);
  }

  speed(){
    console.log('This is a Bus class Method');
  }
}

// let v1 = new Vehicle(1650, 4000);
// console.log(v1);
// v1.speed();


// let bus = new Bus(5000, 6500, 80);
// console.log(bus);
// bus.speed();

//module.exports = Vehicle,Bus