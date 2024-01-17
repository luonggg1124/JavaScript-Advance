const currencies = new Map([
    ['USD', 'United States dollar'],
    ['UER', 'Uero'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


console.log('----- FOREACH -----');
movements.forEach(function(movement) {
    if(movement > 0){
        console.log(`You deposited ${movement}`);
    }else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
})
