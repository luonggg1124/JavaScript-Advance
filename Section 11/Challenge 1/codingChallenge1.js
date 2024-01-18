// Code by Nguyen Minh Luong
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice(1, -2);
    const newdogsJuliaAndKate = [...dogsJuliaCorrected,...dogsKate];
    //console.log(newdogsJuliaAndKate);
    newdogsJuliaAndKate.forEach(function (age, no){
        const dog = age >= 3 ? `Chó số ${no} là người lớn và ${age} tuổi` : `Chó số ${no} vẫn là chó con 🐶`;
        console.log(dog);
    });
}
console.log("----------- TEST DATA 1 -----------");
checkDogs(dogsJulia, dogsKate);
console.log("----------- TEST DATA 2 -----------");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Code by Jonas

const checkDogsJ = function (dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2);
    //console.log(dogsJuliaCorrected);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    dogs.forEach(function (dog, i) {
        if(dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        }else{
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    })
};
//console.log("----------- TEST DATA 1 -----------");
//checkDogsJ(dogsJulia, dogsKate);
//console.log("----------- TEST DATA 2 -----------");
//checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
