const R = require('ramda');

const users = [
  { name: 'John', age: 25 },
  { name: 'Lenny', age: 51 },
  { name: 'Andrew', age: 45 },
  { name: 'Peter', age: 81 },
  { name: 'Anna', age: 43 },
  { name: 'John', age: 45 },
  { name: 'Albert', age: 45 },
  { name: 'Adam', age: 47 },
  { name: 'John', age: 45 },
  { name: 'Robert', age: 72 }
];

console.log(R.pluck('age', users));
console.log(R.pluck('name', users));