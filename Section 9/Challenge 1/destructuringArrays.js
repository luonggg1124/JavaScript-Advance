//destructuring arrays : Phân giã mảng - phân giải mảng

const restaurant = {
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23, Firenze, Italy',
    categories:['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu:['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
}
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr; // x,y,z will have values ​​of 2,3,4 respectively(tương ứng)
console.log(x,y,z);
console.log(arr); // arr array will not be affected(ảnh hưởng)

const [first, , ,second] = restaurant.categories; // có thể để rỗng để lấy phần tử mong muốn

console.log(first, second);

let [main, secondary] = restaurant.categories;
// Switching variables  (Chuyển mạch biến)
// let temp = main;
// main = secondary;
// secondary= temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
// Receive 2 return values from a  function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);
// Nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, ,j] = nested; i = 2, j = [5,6]
const [i, ,[j, k]] = nested;
console.log(i, j, k); 
// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const newMenu = [...restaurant.starterMenu, 'Pasta'];
console.log(newMenu);

