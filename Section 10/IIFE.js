
const runOnce = function () {
    console.log('This will never run again');
}
runOnce();
//Immediately Invoked Function Expressions - Biểu thức hàm được gọi ngay lập tức
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

//console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
    let Private = 10;
    const  isPrivate = 23;
    var notPrivate = 46;
}
//console.log(Private);
console.log(notPrivate);