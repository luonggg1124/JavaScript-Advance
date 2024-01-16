'use strict';

// . Optional Chaining (?.)
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

if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//console.log(restaurant.openingHours.mon?.open);

const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
for(const day of days){
    
    const open = restaurant.openingHours[day]?.open || 'Closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Method
console.log(restaurant.order?.(0,1) ?? 'Method  does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method  does not exist');

// Arrays
const users = [{name: 'Jonas', email: 'hello@jonas.io'}];

console.log(users[0].name ?? 'User array empty');

if(users.length > 0) console.log(users[0].name);
else console.log('user array empty');

