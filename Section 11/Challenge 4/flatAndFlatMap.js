const arr = [[1,2,3], [4,5,6], 7, 8];
console.log(arr.flat());
// Phương thức flat() là một phương thức có sẵn trong mảng (Array) trong JavaScript. 
// Nó được sử dụng để "làm phẳng" (flatten) một mảng nhiều chiều thành một mảng một chiều.

//depth (tùy chọn) là một số nguyên dùng để xác định mức độ "làm phẳng" của mảng.
//Giá trị mặc định là 1. Nếu depth là 0, phương thức flat() sẽ không làm phẳng mảng.

const arr2 = [[1, 2,[3, 4]]];
console.log(arr2.flat(2));

// flatMap

// Phương thức flatMap() là một phương thức có sẵn trong mảng (Array) trong JavaScript.
// Nó kết hợp các bước "làm phẳng" (flatten) và ánh xạ (map) trên một mảng và trả về một mảng mới.

// Trong đó:

// callback là một hàm (function) được gọi cho mỗi phần tử trong mảng. Nó nhận ba tham số:
// currentValue: Giá trị của phần tử hiện tại đang được xem xét.
// index (tùy chọn): Chỉ số của phần tử hiện tại đang được xem xét.
// array (tùy chọn): Mảng gốc đang được xem xét
