const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
const mov = movements.sort((a, b) => {
    if(a > b){
        return 1;
    }
    if(b > a){
        return -1;
    }
    // return b - a; // a - b >< b - a
});
console.log(mov);