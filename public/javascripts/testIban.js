const Tester = require('./checker')

const testIban = function (iban) {
  let checker = new Tester(iban)
  return checker.check()
}

module.exports = testIban
