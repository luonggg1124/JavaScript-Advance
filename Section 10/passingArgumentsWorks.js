const flight = 'LH234';
const jonas = {
    name:'Jonas Schmedtmann',
    passport: 24739479284,
};

const checkIn = function (flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;
    if(passenger.passport === 24739479284) {
        console.log('Checked in');
    }else{
        console.log('Wrong passport');
    }
}

//checkIn(flight, jonas);
const flightNum = flight;
const passenger = jonas;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000000);  //Trunc bỏ qua phần thập phân giữ lại phần nguyên
}
