// Short Circuiting - Rút gọn
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
    },
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    } 
}

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//restaurant.numGuests = 20;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // guests1 != null, underfined, false, 0, empty(rỗng) thì sẽ vào trường hợp còn lại
console.log(guests1);

const guests2 = restaurant.numGuests || 10; //Tương tự guests1 
console.log(guests2);

// => or (||) và ?: ở trên tương tự nhưng or(||) có thể nhận nhiều giá trị hơn và trả về giá trị gần nhất là truthy(true)

console.log('---- AND ----');

console.log(0  && 'Jonas');
console.log(7 && 'Jonas');
// Cách hoạt động của toán tử "&&" như sau:
// Nếu cả hai biểu thức được đánh giá đều là "truthy", thì toán tử "&&" trả về giá trị cuối cùng được đánh giá.
// Nếu một trong hai biểu thức là "falsy" (false, null, undefined, 0 hoặc rỗng), thì toán tử "&&" trả về giá trị đó.

// Practical example - Ví dụ thực tế
if(restaurant.orderPizza){
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// The Nullish Coalescing Operator 
// Toán tử Nullish Coalescing hoạt động như sau:
// Nếu giá trị bên trái của toán tử "??" là null hoặc undefined, thì toán tử trả về giá trị bên phải.
// Nếu giá trị bên trái của toán tử "??" không phải là null hoặc undefined, thì toán tử trả về giá trị bên trái.

console.log(0 ?? 'a');
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);