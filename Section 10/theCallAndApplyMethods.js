const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode} ${flightNum}`,name});
    }
   
}

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);
const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams'); does not work
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Marry Cooper');
console.log(lufthansa);
// call là một phương thức có sẵn trong JavaScript, được sử dụng để gọi một
// hàm và thiết lập giá trị this cho hàm đó. Phương thức call cho phép ta 
// truyền vào một giá trị cụ thể để làm this bên trong hàm, sau đó thực thi
// hàm đó với giá trị this đã được thiết lập.