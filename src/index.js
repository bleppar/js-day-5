import { Rational, SimplifiedRational } from './Rational'

const oneHalf = new SimplifiedRational(2, 4)
const threeFourths = new Rational(3, 4)
console.log(oneHalf)
console.log(oneHalf.add(threeFourths))

const bessy = new Cow('bessy')

bessy.makeSound()

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
