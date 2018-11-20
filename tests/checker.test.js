const Checker = require('../public/javascripts/checker')
describe('Test_iban class', () => {
  let testChecker = new Checker(1)
  test('it has a number', () => {
    expect(testChecker.iban).toBe('1')
  })
  test('it has a divisor', () => {
    expect(testChecker.divisor).toBe(97)
  })
  test('it has a valid variable', () => {
    expect(testChecker.valid).toBeDefined()
  })
  test('it has a transform function', () => {
    expect(testChecker.transform).toBeDefined()
  })
  test('it has a calc function', () => {
    expect(testChecker.calc).toBeDefined()
  })
  test('has a check function', () => {
    expect(testChecker.check).toBeDefined()
  })
})
describe('has functions that transform and check the IBAN', () => {
  let testChecker = new Checker('DE19760300800930875295')
  test('converts the mixed string into a transformed numberstring ', () => {
    expect(testChecker.transform('DE19760300800930875295')).toBe('760300800930875295131419')
  })
  test('it works out whether a iban is valid or not', () => {
    expect(testChecker.check()).toBeTruthy()
  })
})
