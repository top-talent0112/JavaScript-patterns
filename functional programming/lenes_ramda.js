const ramda = require('ramda');
const { compose, lensProp, view } = ramda;
const lensProps = [
  'foo',
  'bar',
  1
];
const lenses = lensProps.map(lensProp);
const truth = compose(...lenses);
const obj = {
  foo: {
    bar: [false, true]
  }
};
console.log(
  view(truth, obj)
);
