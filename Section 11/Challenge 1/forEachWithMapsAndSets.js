
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['UER', 'Uero'],
    ['GBP', 'Pound sterling'],
]);
console.log(currencies);
currencies.forEach(function (value, key, map){
    console.log(`${key}: ${value}`);
});
for(const [key, value] of currencies){
    console.log(`${key}: ${value}`);
}

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value , key, map) {
    console.log(`${key}: ${value}`);
});