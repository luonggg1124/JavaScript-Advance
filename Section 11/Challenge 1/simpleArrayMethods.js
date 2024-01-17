const currencies = new Map([
    ['USD', 'United States dollar'],
    ['UER', 'Uero'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
//console.log(arr.slice(2)); //trích xuất mảng chỉ lấy các phần tử từ số 2 trở đi => ouput: [c,d,e]
//console.log(arr.slice(-2)); //Trích xuất mảng chỉ lấy 2 phần tử cuối mảng => ouput: [d,e]
//console.log(arr.slice(2, 4)); // trích xuất phần tử bắt đầu từ vị trí số 2 và kết thúc bằng vị trí số 4 => ouput:[c,d]
//console.log(arr.slice(1, -2));// Trích xuất bắt đầu từ vị trí số 1 và kết thúc tại trước 2 phần tử cuối => ouput: [b,c]
//console.log([...arr]);

// SPLICE
//console.log(arr.splice(2)); //output: [c, d, e]
//arr.splice(-1); //xóa phần tử cuối của mảng
//arr.splice(1, 2);

// REVERSE
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());  //đảo ngược các phần tử

//CONCAT 
const letters = arr.concat(arr2); //Nối mảng
console.log(letters);
console.log([...arr,...arr2]);

// JOIN
console.log(letters.join('-')); //biến thành chuỗi dùng kí tự nối các phần tử