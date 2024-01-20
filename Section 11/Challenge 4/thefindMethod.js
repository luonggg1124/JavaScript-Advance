const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdraw = movements.find(mov => mov < 0);
console.log(firstWithdraw);