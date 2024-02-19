class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate = function() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake = function() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed){
        this.speed = speed * 1.6;
    }
} 

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speed = 50;
console.log(ford.speedUS);
