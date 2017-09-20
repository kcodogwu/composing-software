'use strict';

const g = n => n + 1;
const f = n => n * 2;

const doStuff = x => {
  const afterG = g(x);
  const afterF = f(afterG);

  console.log(`after g: ${ afterG }`);
  console.log(`after f: ${ afterF }`);
  return afterF;
};

doStuff(20); // after g: 21; after f: 42

const wait = time => new Promise(
  (resolve, reject) => setTimeout(resolve, reject)
);

wait(300)
  .then(() => 20)
  .then(g)
  .then(f)
  .then(value => console.log(value)) // 42
;

// A simple one-liner to improve doStuff()
const doStuffBetter = x => f(g(x));

console.log(doStuffBetter(20)); // 42

// Logging utility
const trace = label => value => {
  console.log(`${ label }: ${ value }`);

  return value;
};

const doStuffAgain = x => {
  const afterG = g(x);
  const afterF = f(afterG);

  trace(`after g`)(afterG);
  trace(`after f`)(afterF);
  return afterF;
};

// Using functional programming library like Lodash
// import pipe from 'lodash/fp/flow';

// To do this without importing a module, we can create a pipe like this
// pipe(...fns: [...Function]) => x => y
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const doStuffBetterAgain = pipe(
  g,
  trace('after g'),
  f,
  trace('after f')
);

doStuffBetterAgain(20); // => after g: 21; after f: 42"

// Examples of primitive type
const firstName = 'Claude';
const lastName = 'Debussy';

// Example of a composite type
const fullName = {
  firstName,
  lastName
};

// Building composites with class inheritance
class Foo {
  constructor () {
    this.a = 'a';
  }
}

class Bar extends Foo {
  constructor (options) {
    super(options);
    this.b = b;
  }
}

const myBar = new Bar(); 

console.log(myBar); // {a: 'a', b: 'b'}

// Building composites with mixin composition
const a = { a: 'a' };
const b = { b: 'b' };
const c = { ...a, ...b };

console.log(c); // {a: 'a', b: 'b'}