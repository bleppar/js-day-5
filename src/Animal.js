const Animal = class {
  constructor (name, sound) {
    this._name = name
    this._sound = sound
  }

  get name () {
    return this._name
  }

  set name (name) {
    this._name = name
  }

  get sound () {
    return this._sound
  }

  set sound (sound) {
    this._sound = sound
  }

  makeSound () {
    console.log(this._sound)
  }
}

// TODO create 3 classes: dog, cat, and cow which extend animal
// and have default sounds that each animal will make
