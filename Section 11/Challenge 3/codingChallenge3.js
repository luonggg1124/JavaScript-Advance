const calcAverageHumanAge = ages => 
     ages
    .map(age => (age <= 2 ? 2*age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length,0);
    // const average = adults.reduce((acc, age) => acc + age,0) / adults.length;

const test1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const test2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(test1,test2);
