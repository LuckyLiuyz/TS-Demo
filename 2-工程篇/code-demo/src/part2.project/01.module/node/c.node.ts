let a1 = require('./a.node');
let b2 = require('./b.node');
let c3 = require('../es6/a');
import d4 = require('../es6/d');

console.log('a1 =', a1);
console.log('b2 =',b2);
// c3()
// console.log(c3)
// c3.default()
d4();
