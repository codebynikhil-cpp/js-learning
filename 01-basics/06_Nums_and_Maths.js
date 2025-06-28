const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // 0 after point 

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //() specify the number specific

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //Indian version en-IN

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // absolute value
// console.log(Math.round(4.6)); // round off value
// console.log(Math.ceil(4.2)); // top value
// console.log(Math.floor(4.9)); // down value
// console.log(Math.min(4, 3, 6, 8)); // Minimum Value
// console.log(Math.max(4, 3, 6, 8)); // Maximum Value

// console.log(Math.random()); // Random Value between 0 and 1
// console.log((Math.random()*10) + 1); // Value from 1 to 9 -> +1 for safe case 0.1 like
// console.log(Math.floor(Math.random()*10) + 1); //for small value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //Minm value between 10 and 20
