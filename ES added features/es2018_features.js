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

