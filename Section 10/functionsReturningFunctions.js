const greet = function (gretting) {
    return function(name){
        console.log(`${gretting} ${name}`);
    }
}

const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas'); //ouput Hello Jonas 

// Challenge
const greetArr = greeting => name =>console.log(`${greeting} ${name}`);
greetArr('Hello')('Jonas');