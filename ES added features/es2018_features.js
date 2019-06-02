//1. Shared memory and atomics
// 2. Tagged Template literal restriction removed
//A "Tag" function returns a custom string literal.

//In this example, greet calls timeGreet() to append Good //Morning/Afternoon/Evening depending on the time of the day.
function greet(hardCodedPartsArray, ...replacementPartsArray) {
    console.log(hardCodedPartsArray); //[ 'Hello ', '!' ]
    console.log(replacementPartsArray); //[ 'Raja' ]
    let str = '';
    hardCodedPartsArray.forEach((string, i) => {
        if (i < replacementPartsArray.length) {
            str += `${string} ${replacementPartsArray[i] || ''}`;
        } else {
            str += `${string} ${timeGreet()}`; //<-- append Good morning/afternoon/evening here
        }
    });
    return str;
}
   //🚀Usage:
const firstName = 'Raja';
const greetings = greet`Hello ${firstName}!`; //👈🏼<-- Tagged literal
console.log(greetings); //'Hello  Raja! Good Morning!' 🔥

function timeGreet() {
    const hr = new Date().getHours();
    return hr < 12
    ? 'Good Morning!'
    : hr < 18 ? 'Good Afternoon!' : 'Good Evening!';
}

// 3. “dotall” flag for Regular expression
//ECMAScript 2018
console.log(/first.second/s.test('first\nsecond')); //true   Notice: /s 👈🏼


// 4. RegExp Named Group Captures 🔥
// 4.1 Basic Named group example

//before
let re1 = /(\d{4})-(\d{2})-(\d{2})/;
let result = re1.exec('2018-12-14');
console.log(result);

//after ES2018
let re2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
let result2 = re2.exec('2019-12-23');
console.log(result2);
console.log(result2.groups.year);

// 4.2 Using Named groups inside regex itself

let sameWords = /(?<fruit>orange|apple)==\k<fruit>/u;
console.log(sameWords.test('orange==orange'));
console.log(sameWords.test('apple==orange'));

// 4.3 Using named groups in String.prototype.replace
let re = /(?<firstname>[A-Za-z]+) (?<lastname>[A-Za-z]+)/u;
console.log('Dream High'.replace(re, '$<lastname> $<firstname>'));

// 5. Rest properties for Objects

// 5.1 You can use rest to help extract only properties you want

let { firstName1, age, ...remaining } = {
    firstName1: 'Dream',
    lastName: 'High',
    age: 20,
    height: '123',
    address: 'somewhere',
}

console.log("first Name, age", { firstName1, age });

// 5.2 Even better, you can remove unwanted items! 🔥🔥
let { address, ...safeInfo } = {
    firstName: 'Dream',
    lastName: 'High',
    age: 20,
    height: '123',
    address: 'somewhere',
}

//6. Spread properties for Objects
// 7. RegExp Lookbehind Assertions
//positive assertion
console.log(/(?<=#).*/.test('winning'));
console.log(/(?<=#).*/.test('#winning'));
//negative assertion
console.log('A gallon of milk is $30.00'.match(/(?<!\$)\d+\.?\d+/));
console.log('A gallon of milk is #30.00'.match(/(?<!\$)\d+\.?\d+/)[0]);

// 8. Promise.prototype.finally()

//resolve case
let started = false;

let myResolvedPromise = new Promise((resolve, reject) => {
    resolve("I am good!!");
})
    .then(val => {
        console.log(val);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log("This function is always executed!(after resolved)");
        started = false;
    });

//reject case
let myRejectPromise = new Promise((resolve, reject) => {
    reject("I am absolutely not good!!");
})
    .then(val => {
        console.log(val);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log("This function is always executed!(after rejected)");
        started = false;
    });

//Error thrown in Promise
    let myErrorPromise = new Promise((resolve, reject) => {
        // throw new Error("Error has been occured");
    })
        .then(val => {
            console.log(val);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            console.log("This function is always executed!(Error thrown in Promise)");
            started = false;
        });

//Error thrown in Promise
let myErrorInCatchPromise = new Promise((resolve, reject) => {
        throw new Error("Error has been occured");
    })
        .then(val => {
            console.log(val);
        })
        .catch(err => {
            // throw new Error("Throw another error");
        })
        .finally(() => {
            console.log("This function is always executed!(2 Errors thrown in Promise)");
            started = false;
        });

// 9. Asynchronous Iteration

const promises = [
    new Promise(resolve => resolve(1)),
    new Promise(resolve => resolve(2)),
    new Promise(resolve => resolve(3)),
];

async function test1() {
    for (const obj of promises) {
        console.log(obj);
    }
}

async function test2() {
    for await (const obj of promises) {
        console.log(obj);
    }
}

test1();
test2();

