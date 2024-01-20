const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const uerToUsd = 1.1;
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {return mov * uerToUsd})
    .reduce((acc, mov) => acc + mov,0);
console.log(totalDepositsUSD);