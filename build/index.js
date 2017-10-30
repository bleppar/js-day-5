'use strict';

var _Rational = require('./Rational');

var oneHalf = new _Rational.SimplifiedRational(2, 4);
var threeFourths = new _Rational.Rational(3, 4);
console.log(oneHalf);
console.log(oneHalf.add(threeFourths));

// const Dog = class {
//   constructor (name) {
//     this._name = name
//   }
//
//   get name () {
//     return this._name
//   }
//
//   set name (name) {
//     this._name = name
//   }
// }
//
// let dog1 = new Dog('Fido')
//
// console.log(dog1.name)