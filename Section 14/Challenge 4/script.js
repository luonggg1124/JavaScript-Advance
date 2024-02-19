class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge(){
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName}`);
    }
    get age(){
        return 2037 - this.birthYear;
    }
    // Set a property that already exists
    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    }
    get fullName(){
        return this._fullName;
    }
    //Static method
    static hey(){
        console.log('Hey there');
        console.log(this);
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }
    intruduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    calcAge(){
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.intruduce();
martha.calcAge();


const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

}
const steven = Object.create(PersonProto);

const StudentProto =  Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear)
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'Computer Science');
jay.introduce();

class Account {
    locale = navigator.language;
    #movements = [];
    #pin;

    constructor(owner, currency, pin){
        this.owner= owner;
        this.currency = currency;
        this.#pin = pin;
        // this.#movements = [];
        // this.locale = navigator.language;
    }
    getMovements(){
        return this.#movements;
    }
    deposit(val){
        this.#movements.push(val);
    }
    withdraw(val){
        this.deposit(-val);
    }
    
    requestLoan(val){
        if(this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
    #approveLoan(val){
        return true; 
    }
}

const acc1 = new Account('Jonas', 'UER', 1111);
// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1.pin);
// console.log(acc1.#approveLoan(100));