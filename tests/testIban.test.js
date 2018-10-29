const checker = require('../public/javascripts/checker')
const stringCleaner = require('../public/javascripts/stringCleaner')
const testIban = require('../public/javascripts/testIban')

jest.mock('../public/javascripts/checker');

beforeEach(() => {
  checker.mockClear();
});

it('We can check if testIban called the class constructor', () => {
  testIban(1);
  expect(checker).toHaveBeenCalledTimes(1);
});
