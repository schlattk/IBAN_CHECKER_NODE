const Checker = require('../public/javascripts/checker')
const testIban = require('../public/javascripts/testIban')
jest.mock('../public/javascripts/checker')
beforeEach(() => {
  Checker.mockClear()
})
it('We can check if testIban called the class constructor', () => {
  testIban('BE71 0961 2345 6769')
  expect(Checker).toHaveBeenCalledTimes(1)
})
testIban('BE71 0961 2345 6769')
let mockCheckerInstance = Checker.mock.instances[0]
let mockCheckerInstanceCheck = mockCheckerInstance.check
it('We can check if the check method has been called in the constructor', () => {
  testIban('BE71 0961 2345 6769')
  expect(mockCheckerInstanceCheck).toHaveBeenCalledTimes(1)
})
