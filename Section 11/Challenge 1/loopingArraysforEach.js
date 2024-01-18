
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['UER', 'Uero'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



for(const [i, movement] of movements.entries()){
    if(movement > 0){
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    }else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('----- FOREACH -----');
movements.forEach(function (mov, index, array) {
    if (mov > 0){
        console.log(`Movement ${index + 1}: You deposited ${mov}`);
    }else {
        console.log(`Movement ${index + 1}: You withdrew ${Math.abs(mov)}`);
    }
})
