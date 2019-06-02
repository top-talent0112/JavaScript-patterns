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

// 2. Object.entries()

// Object.entries() is related to Object.keys , but instead of returning just keys, it returns both keys and values in the array fashion. This makes it very simple to do things like using objects in loops or converting objects into Maps.

//Es 5.1
Object.keys(cars).forEach(function(key) {
    console.log('key: ' + key + 'value:' + cars[key]);
})

//ES 2017
for (let [key, value] of Object.entries(cars)) {
    console.log('key: ' + key + 'value:' + value);
}

const map1 = new Map();
Object.keys(cars).forEach(key => {
    map1.set(key, cars[key])
});

console.log(map1);

const map = new Map(Object.entries(cars));
console.log(map);

// 3. String padding
// Two instance methods were added to String — String.prototype.padStart and String.prototype.padEnd — that allow appending/prepending either an empty string or some other string to the start or the end of the original string.

// 3.1 padStart example:
const formatted = [0, 2, 13, 22, 12312, 142].map(num => 
    num.toString().padStart(10, '0')
);

console.log("Formatted String padStart example");
console.log(formatted);

// 3.2 padEnd example:
const cars1 = {
    '🚙BMW': '10',
    '🚘Tesla': '5',
    '🚖Lamborghini': '0'
}
Object.entries(cars1).map(([name, count]) => {
    console.log(`${name.padEnd(10, '-')} Count: ${count.padStart(5, '0')}`);
});

// 4. Object.getOwnPropertyDescriptors
// Object.assign shallow copies all the details except getter and setter functions of the original source object.
var Car = {
    name: 'BMW',
    price: 1000000,
    set discount(x) {
        this.d = x;
    },
    get discount() {
        return this.d;
    },
};
   //Print details of Car object's 'discount' property
console.log(Object.getOwnPropertyDescriptor(Car, 'discount'));
   //prints..
   // { 
   //   get: [Function: get],
   //   set: [Function: set],
   //   enumerable: true,
   //   configurable: true
   // }
   //Copy Car's properties to ElectricCar using Object.assign
const ElectricCar = Object.assign({}, Car);
   //Print details of ElectricCar object's 'discount' property
console.log(Object.getOwnPropertyDescriptor(ElectricCar, 'discount'));
   //prints..
   // { 
   //   value: undefined,
   //   writable: true,
   //   enumerable: true,
   //   configurable: true 
     
   // }
   //⚠️Notice that getters and setters are missing in ElectricCar object for 'discount' property !👎👎
   //Copy Car's properties to ElectricCar2 using Object.defineProperties 
   //and extract Car's properties using Object.getOwnPropertyDescriptors
const ElectricCar2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(Car));
   //Print details of ElectricCar2 object's 'discount' property
console.log(Object.getOwnPropertyDescriptor(ElectricCar2, 'discount'));
   //prints..
   // { get: [Function: get],  👈🏼👈🏼👈🏼
   //   set: [Function: set],  👈🏼👈🏼👈🏼
   //   enumerable: true,
   //   configurable: true 
   // }
   // Notice that getters and setters are present in the ElectricCar2 object for 'discount' property!

//5. Add trailing commas in the function parameters

//6. Async/Await
// 6.1 Async functions themselves return a Promise.
function doubleAfter3Sec(a) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a * 2), 3000);
    })
}

async function doubleAndAdd(a, b) {
    a = await doubleAfter3Sec(a);
    b = await doubleAfter3Sec(b);
    return a + b;
}

doubleAndAdd(2, 3).then(console.log);

// 6.2 Calling async/await in parallel
async function doubleAndAddAtOneTime(a, b) {
    [a, b] = await Promise.all([doubleAfter3Sec(a), doubleAfter3Sec(b)]);
    return a + b;
}
doubleAndAddAtOneTime(2, 3).then(console.log);

// 6.3 Error handling async/await functions
// Option 1 — Use try catch within the function
async function doubleAndAddWithError(a, b) {
    try {
        a = await doubleAfter1SecWithError(a);
        b = await doubleAfter1SecWithError(b);
    } catch (e) {
        return NaN; //return something
    }
    return a + b;
}
   //🚀Usage:
doubleAndAddWithError('one', 2).then(console.log); // NaN
doubleAndAddWithError(1, 2).then(console.log); // 6

function doubleAfter1SecWithError(param) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let val = param * 2;
            isNaN(val) ? reject(NaN) : resolve(val);
        }, 1000);
    });
}

// Option 2— Catch every await expression
//as each await expression is a Promise in itself
async function doubleAndAddWithError1(a, b) {
    a = await doubleAfter1SecWithError(a).catch(e => console.log('"a" is NaN')); // 👈
    b = await doubleAfter1SecWithError(b).catch(e => console.log('"b" is NaN')); // 👈
    if (!a || !b) {
        return NaN;
    }
    return a + b;
}
   //🚀Usage:
doubleAndAddWithError1('one', 2).then(console.log); // NaN  and logs:  "a" is NaN
doubleAndAddWithError1(1, 2).then(console.log); // 6

// Option 3 — Catch the entire async-await function

async function doubleAndAddWithEntire(a, b) {
    a = await doubleAfter1Sec(a);
    b = await doubleAfter1Sec(b);
    return a + b;
}
   //🚀Usage:
doubleAndAddWithEntire('one', 2)
    .then(console.log)
    .catch(console.log);