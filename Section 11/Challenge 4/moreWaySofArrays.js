const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

console.log(x.map(() => 5));

x.fill(1, 3, 5);
console.log(x);

// Phương thức fill() là một phương thức có sẵn trong mảng (Array) trong JavaScript.
// Nó được sử dụng để thay đổi tất cả các phần tử trong mảng bằng một giá trị cụ thể.
arr.fill(23, 2, 6)
console.log(arr);


const y = Array.from({length: 7},() =>1 );
console.log(y);

const z = Array.from({length: 7},(_, i) => i+1 );
console.log(z);