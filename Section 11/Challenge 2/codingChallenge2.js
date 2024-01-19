// Code by Nguyen Minh Luong
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = function (ages){
    const caculatedAge = ages.map(function (age){
        const valueAge = age <= 2 ? age * 2 : 16 + age * 4 ;
        return valueAge;
     });
    const filteredAge = caculatedAge.filter((age) =>age > 18);

    const sumAge = filteredAge.reduce(function (a , c){
        return a + c;
    }, 0);
    
    const averageAge = sumAge / filteredAge.length;
    console.log(`Tuổi trung bình của các chú chó trưởng
    thành sau khi tính ra tuổi người là : ${Math.floor(averageAge)}`); //Math.round(averageAge) => nếu muốn làm tròn theo số thập phân
    
}
calcAverageHumanAge(testData1);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


// Code by Jonas

const calcAverageHumanAgeJ = function (ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2*age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18);
    // const average = adults.reduce((acc, age) => acc + age,0) / adults.length;
    const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length,0);
    return average;
}

const avg1 = calcAverageHumanAgeJ(testData1);
const avg2 = calcAverageHumanAgeJ([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
