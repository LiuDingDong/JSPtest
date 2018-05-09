// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
console.log("hello world")
function isLeapYear(n){
    if(n % 400 === 0){
        return true 
    }
    if(n % 100 === 0){
        return false
    }
    if(n % 4 === 0){
        return true
    }
    return false
}
console.log("2000:" + isLeapYear(2000))

const fibonacci = require('./lib/fibonacci')

var len = 20;
for(; len--; ){
    console.log(fibonacci(len));
}