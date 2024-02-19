// Class expression
// const PersonCl = class {};


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

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
// console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.fullName}`);
// }
// jessica.greet();
// console.log(jessica.age);
// 1.Classes are NOT hoisted(được nâng lên)
// 2.Classes are first-class citizes
// 3.Classes are executed(được thực hiện) in strict mode

const walter = new PersonCl('Walter White', 1965);
// console.log(walter.fullName);

PersonCl.hey();



const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],
    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);
    }
    
}
// console.log(account.latest);
// console.log(account.movements);
// account.latest = 50;
// console.log(account.movements);
