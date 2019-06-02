{/* 1. Object.values
Object.values() is a new function that’s similar to Object.keys() but returns all the values of the Object’s own properties excluding any value(s) in the prototypical chain. */}

const cars = { BMW: 3, Tesla: 2, Toyota: 3 };
//Es2015
const vals = Object.keys(cars).map(key => cars[key]);
console.log(vals);

//ES2017 and onwards
//use
const values = Object.values(cars);
console.log(values);
