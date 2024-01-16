
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase()); //Biến thành chữ thường
console.log(airline.toUpperCase()); //Chữ hoa

// Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); //Xóa khoảng trắng
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97$';
const priceUS = priceGB.replace('$','#').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to barding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
//console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); // /door/g = replaceAll

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('A320'));
console.log(plane.startsWith('320'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
    console.log('Path of the NEW ARibus family');
}

const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are NOT allowed on board');
    } else{
        console.log('Welcome aboard!');
    }
}
checkBaggage('I have a laptop, some foof and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
// Trong JavaScript, phương thức includes()
//  được sử dụng để kiểm tra xem một chuỗi có chứa một chuỗi con hay không
//  . Phương thức này trả về giá trị boolean (true hoặc false) tương ứng với kết quả kiểm tra.


// Trong JavaScript, phương thức startsWith()
// được sử dụng để kiểm tra xem một chuỗi có bắt đầu bằng một chuỗi con cụ thể hay không.
// Phương thức này trả về giá trị boolean (true hoặc false) tương ứng với kết quả kiểm tra.
//Lưu ý rằng phương thức startsWith() trả về true nếu chuỗi con là phần đầu của chuỗi gốc và false nếu không phải.
// Phương thức này không thay đổi chuỗi gốc.

// Trong JavaScript, phương thức endsWith() được sử dụng để kiểm tra xem một
//  chuỗi có kết thúc bằng một chuỗi con cụ thể hay không. Phương thức này trả về giá trị
//   boolean (true hoặc false) tương ứng với kết quả kiểm tra.