'use trict';
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111
}

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222
}

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 1.7,
    pin: 3333
}

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444
}

const accounts = [account1, account2, account3, account4];

//////////////////////////////////////////////////////////////////
// APP
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false){
    containerMovements.innerHTML = '';
    // .textContent = 0
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
    movs.forEach(function(mov, i){
        const type = mov > 0 ? "deposit" : "withdrawal";
        const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;
    
        containerMovements.insertAdjacentHTML('afterbegin', html);

    });
};



const calcPrintBalance = function(acc){
    acc.balance = acc.movements.reduce((acc, cur)=> acc+cur,0);
    labelBalance.textContent = `${acc.balance} EUR`;
}


const calcDisplaySummary = function (account) {
    const incomes = account.movements.filter(mov => mov > 0).reduce((acc, mov)=> acc+mov,0);
    labelSumIn.textContent = `${incomes}€`;
    const out = account.movements.filter(mov => mov < 0).reduce((acc,mov) =>acc+mov,0);
    labelSumOut.textContent = `${Math.abs(out)}€`;
    
    const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int=> int>=1)
    .reduce((acc,mov) =>acc+mov,0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
}

//console.log(containerMovements.innerHTML);
// const user = 'Steven Thomas Williams';
// const userName = user.toLowerCase()
//     .split(' ')
//     .map((name) => name[0])
//     .join('');
const createUsernames = function (accs) {
    accs.forEach(function(acc) {
       acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map((name) => name[0])
        .join('');
       
    });
   
};
createUsernames(accounts);

const updateUI = function (acc) {
        displayMovements(acc.movements);
        calcPrintBalance(acc);
        calcDisplaySummary(acc);
}


let currentAccount;
btnLogin.addEventListener('click',function (e) {
    //Prevent form from submitting
    e.preventDefault();
    
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    if(currentAccount?.pin === Number(inputLoginPin.value)){
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
        containerApp.style.opacity = 1;
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        updateUI(currentAccount);
       
    }
    console.log(currentAccount);
});

btnTransfer.addEventListener('click',function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

    inputTransferAmount.value = inputTransferTo.value = '';

    if(
        amount > 0 && 
        currentAccount.balance >= amount && 
        receiverAcc.username !== currentAccount.username){
    }{
       currentAccount.movements.push(-amount);
       receiverAcc.movements.push(amount);
       updateUI(currentAccount);
    }
})


btnLoan.addEventListener('click',function(e){
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)){
        // Add movements
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e){
    e.preventDefault();
    if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        accounts.splice(index,1);
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
})


let sorted = false;
btnSort.addEventListener('click',function(e){
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
})

const overalBalance = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov,0);



labelBalance.addEventListener('click', function() {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'),el =>Number( el.textContent.replace('€','')));
    console.log(movementsUI);

    const movementsUI2 = [...document.querySelectorAll('.movements__value')];

});

const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov=>mov > 0)
.reduce((sum, cur) => sum+cur,0);
console.log(bankDepositSum);

const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
.reduce((count, cur) => cur >= 1000 ? ++count:count, 0);

console.log(numDeposits1000);

const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
    // cur > 0 ? sums.deposits += cur: sums.withdrawals += cur;
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
},{deposits: 0, withdrawals: 0})

console.log(deposits, withdrawals);
const convertTitleCase = function(title) {
    const capitzalize = str => str[0].toUpperCase() + str.slice(1)
    const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
    const titleCase = title.toLowerCase()
    .split(" ")
    .map(word => exceptions.includes(word) ? word : capitzalize(word)).join(' ');
     //split được sử dụng để chia một chuỗi thành một mảng các chuỗi con dựa trên một ký tự hoặc biểu thức chính quy được chỉ định.
    //  Slice được sử dụng để trích xuất một phần của một mảng hoặc chuỗi và tạo ra một mảng hoặc chuỗi mới chứa các phần tử đã trích xuất. array.slice(start, end)
    //includes() là một phương thức có sẵn trong JavaScript dùng để kiểm tra xem một mảng hoặc chuỗi có chứa một giá trị cụ thể hay không.
    // Phương thức này trả về một giá trị boolean, true nếu giá trị được tìm thấy và false nếu không tìm thấy.
    // Phương thức join() là một phương thức có sẵn trong JavaScript dùng để kết hợp tất cả các phần tử của một mảng thành một chuỗi
    return titleCase;

}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'))
// accounts.forEach(element => {
//     console.log(element.username);
// });

//const account = accounts.find(acc => acc.owner === 'Jessica Davis');
//console.log(account);

