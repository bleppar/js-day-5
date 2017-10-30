export const Rational = class {
  constructor (n, d) {
    this.n = n
    this.d = d
  }

  get numerator () {
    return this.n
  }

  set numerator (n) {
    this.n = n
  }

  get denominator () {
    return this.d
  }

  set denominator (d) {
    this.d = d
  }

  add ({ numerator, denominator }) {
    return new this.constructor(
      (this.numerator * denominator) + (numerator * this.denominator),
      this.denominator * denominator
    )
  }

  toString () {
    return `${this.numerator}/${this.denominator}`
  }
}

const gcd =
  (a, b) =>
    (b === 0)
      ? a
      : gcd(b, a % b)

const simplify =
  (a, b) => {
    const d = gcd(a, b)
    return [a / d, b / d]
  }

export const SimplifiedRational = class extends Rational {
  constructor (n, d) {
    super(...simplify(n, d))
  }
}
