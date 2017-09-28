'use strict';

// there are three important points that make lambda calculus special

// 1. functions are always anonymous.
const sum = (x, y) => x + y; // (x, y) => x + y is the anonymous function expression

// 2. functions in lambda calculus only accept a single input.
const newSum = x => y => x + y; // this a unary function expression equivalent to sum() above
                                // this is also called currying.

// 3. functions are first-class, meaning that functions can be used as inputs to other 
// functions, and functions can return functions.

// classic function composition takes the output from one function and uses it as the input 
// for another function.
const compose = f => g => x => f(g(x));

// and using the above, we have

const doubleIt = n => n * 2;
const inc = n => n + 1;

console.log(compose(doubleIt)(inc)(3));

// when software is composed, it can be represented by a graph of function compositions.
const append = s1 => s2 => s1 + s2;

console.log(append('Hello, ')('World!'));