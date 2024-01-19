const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurTousd = 1.1;
const movementUSD = movements.map(function (mov) {
    return mov * eurTousd;
});

console.log(movementUSD);

const movementUSDfor = [];
for(const mov of movements) {
    movementUSDfor.push(mov * eurTousd); //Push() thêm phần tử vào cuối mảng
}
console.log(movementUSDfor);

const movementsDescription = movements.map((mov, i, arr) => 
    //const Mov1 = mov > 0 ? `Movement ${i+1}: You deposited ${mov}` : `Movement ${i + 1}:${Math.abs(mov)}`;
    //return Mov1;
    `Movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescription);