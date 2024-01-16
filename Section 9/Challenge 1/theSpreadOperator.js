// Toán tử trải rộng - Toán tử phân phối
const restaurant = {
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23, Firenze, Italy',
    categories:['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu:['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: { 
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        }      
     },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDevivery: function ({starterIndex = 1, mainIndex = 0, time = '20.00', address}) {
        console.log( 
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function (ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3} `);
    }

}
// Iterable:arrays, strings, maps, sets .NOT objects
const str = 'Luong';
const letters = [...str,'a'];
console.log(letters); 
console.log(...str);
// console.log(`${...str} Schmedtmann`); => Error 
const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),
prompt("Ingredient 2"),
prompt("Ingredient 3")];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

const newRestaurant = {
    foundeIn: 1998,
    ...restaurant,
    founder: 'Guiseppe'
};
console.log(newRestaurant);

const copyRestaurant = {...restaurant};
copyRestaurant.name = 'Ristorante Roma';
console.log(copyRestaurant.name);
console.log(restaurant.name);