const stringCleaner = require('./stringCleaner')
class Tester {
  constructor (iban) {
    this.iban = stringCleaner(iban)
    this.divisor = 97
    this.valid = true
  }
  transform (rawInput) {
    return (rawInput.slice(4) + rawInput.slice(0, 4)).split('').map(v => isNaN(v) ? (v.charCodeAt(0) & 255) - 55 : v).join('')
  }
  calc (x, y) {
    return this.transform(this.iban).slice(x, y)
  }
  check () {
    let divident = this.calc(0, 10)
    let remainder = divident % this.divisor
    divident = remainder + this.calc(10, 20)
    remainder = divident % this.divisor
    divident = remainder + this.calc(20, 30)
    remainder = divident % this.divisor
    remainder !== 1 ? this.valid = false : this.valid = true
    return this.valid
  }
}

module.exports = Tester
