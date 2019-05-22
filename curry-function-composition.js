// A curried function is a function that takes multiple arguments one at a time.

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const trace = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
};
const g = n => n + 1;
const f = n => n * 2;
/*
Note: function application order is
bottom-to-top:
*/
const h = compose(
  trace('after f'),
  f,
  trace('after g'),
  g
);
h(20);
/*
after g: 21
after f: 42
*/

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const trace = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
};
const g = n => n + 1;
const f = n => n * 2;
/*
Now the function application order
runs top-to-bottom:
*/
const h = pipe(
  g,
  trace('after g'),
  f,
  trace('after f'),
);
h(20);
/*
after g: 21
after f: 42
*/

//curry and function compostion together

const map = fn => mappable => mappable.map(fn);
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const log = (...args) => console.log(...args);
const arr = [1, 2, 3, 4];
const isEven = n => n % 2 === 0;
const stripe = n => isEven(n) ? 'dark' : 'light';
const stripeAll = map(stripe);
const striped = stripeAll(arr); 
log(striped);
// => ["light", "dark", "light", "dark"]
const double = n => n * 2;
const doubleAll = map(double);
const doubled = doubleAll(arr);
log(doubled);
// => [2, 4, 6, 8]