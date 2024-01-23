
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight**0.75*28)));
console.log(dogs);
//Trong JavaScript, phương thức trunc() được sử dụng để cắt ngắn một số thập phân thành một 
//ố nguyên bằng cách loại bỏ các chữ số thập phân. Phương thức này trả về một số nguyên mới.

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);
// Trong JavaScript, phương thức find() được sử dụng để tìm kiếm và trả về phần tử đầu tiên trong một mảng 
//thỏa mãn một điều kiện được xác định bởi một hàm gọi lại (callback function). Phương thức này trả về undefined 
//nếu không tìm thấy phần tử thỏa mãn điều kiện.

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little`);

// Trong JavaScript, phương thức filter() được sử dụng để tạo ra một mảng mới chứa các phần tử 
//của mảng gốc mà thỏa mãn một điều kiện được xác định bởi một hàm gọi lại (callback function)

console.log(dogs.some(dog => dog.curFood === dog.recFood));

const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

//Trong JavaScript, phương thức some() được sử dụng để kiểm tra xem có ít nhất một phần
// tử trong một mảng thỏa mãn một điều kiện xác định bởi một hàm gọi lại (callback function).

console.log(dogs.filter(checkEatingOkay));

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

// Trong JavaScript, phương thức slice() được sử dụng để trích xuất một phần của một mảng 
// và tạo ra một mảng mới chứa các phần tử đó. Phương thức này không làm thay đổi mảng gốc, mà chỉ trả về một mảng con mới.

// Cú pháp của phương thức slice() là:
// array.slice(start, end)