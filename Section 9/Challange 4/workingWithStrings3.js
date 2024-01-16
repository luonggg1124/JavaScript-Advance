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

console.log('a+every+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];
    for(const n of names){
        //namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInline = function (n){
    console.log(`There are ${n} planes in line ${'#'.repeat(n)}`);
}
planesInline(5);
planesInline(3);
planesInline(12);
// Trong JavaScript, phương thức join() được sử dụng để kết hợp các 
// phần tử của một mảng thành một chuỗi duy nhất. Phương thức này trả về 
// một chuỗi mới được tạo bằng cách nối các phần tử của mảng với một ký tự phân tách (separator) tùy chọn


// Trong JavaScript, phương thức split() được sử dụng để
//  tách một chuỗi thành một mảng các chuỗi con dựa trên một ký tự hoặc biểu thức chính
//  quy (regular expression) cho trước. Phương thức này trả về một mảng chứa các phần tử là các chuỗi con đã được tách.

// Trong JavaScript, phương thức slice() được sử dụng để trích 
// xuất một phần của một chuỗi, một mảng hoặc một thành phần của một
//  mảng và trả về một mảng mới chứa các phần tử đã trích xuất.

// Trong JavaScript, phương thức repeat() được sử dụng để tạo ra
//  một chuỗi mới bằng cách lặp lại một chuỗi đã cho một số lần xác định.

