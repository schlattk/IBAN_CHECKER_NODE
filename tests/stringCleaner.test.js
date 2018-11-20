const stringCleaner = require('../public/javascripts/stringCleaner')
describe('stringCleaner', () => {
  test('it removes spaces and commas and returns a string', () => {
    expect(stringCleaner('123  123,, ')).toBe('123123')
  })
})
