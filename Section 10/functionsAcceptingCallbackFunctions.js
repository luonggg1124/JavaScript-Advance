// const add = (a,b) => a + b;
// console.log(add(1,2)); //Function arrow


const oneWord = function(str) {
    return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascipt', upperFirstWord);

const high5 = function () {
    console.log('hi');
} 
document.body.addEventListener('click',high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);