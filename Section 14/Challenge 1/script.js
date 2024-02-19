'use trict';

const Person = function(firstName, birthYear) {
    console.log(this);
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this
    // this.calceAge = function() {
    //     console.log(2037 - this.birthYear);
    // }
}
const jonas = new Person('Jonas', 1991);
// console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(matilda.firstName, matilda.birthYear)

const jay = 'Jay';
// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);
// jonas.calceAge();
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}



// Prototypes
Person.prototype.calceAge = function () {
    console.log(2037 - this.birthYear);
};

jonas.calceAge();
matilda.calceAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));


// prototypeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens';
//console.log(jonas.species, matilda)

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
}
console.log(arr.unique());



