//1. Array.prototype.includes

const arr = [1, 2, 3, 4, NaN];

//instead of using this 
if (arr.indexOf(3) >= 0) {
    console.log(true);
}

//please use this

if (arr.includes(3)) {
    console.log(true);
}

//ps: notice that the indexof doesn't work for the NaN
console.log(arr.includes(NaN));
console.log(arr.indexOf(NaN));

//2. Exponentiation infix operator

//Instead of using this..
Math.pow(2, 7);
//use this
console.log("2 power to 7=====", 2**7);

