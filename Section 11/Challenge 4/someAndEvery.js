const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
console.log(movements.includes(-130));
// Some
console.log(movements.some(mov => mov === -130));

// Phương thức some() là một phương thức có sẵn trong mảng (Array) trong JavaScript.
//  Nó được sử dụng để kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn một điều kiện được xác định hay không.

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));

// Phương thức every() là một phương thức có sẵn trong mảng (Array) trong JavaScript. 
// Nó được sử dụng để kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện được xác định hay không.

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
//console.log(movements.filter(deposit));