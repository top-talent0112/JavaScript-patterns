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
