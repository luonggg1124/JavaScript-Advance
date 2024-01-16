'use strict';
const weekdays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
const openingHours = { 
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    }      
};

const restaurant = {
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23, Firenze, Italy',
    categories:['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu:['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDevivery: function ({starterIndex = 1, mainIndex = 0, time = '20.00', address}) {
        console.log( 
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}`
        );
    },
    openingHours
    ,
    orderPasta: function (ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3} `);
    },
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    } 
}

const question = new Map([
    ['question', 'What is the best programming language in the world'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); 

for(const [key,value] of question){
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));
//console.log(answer);

//console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);