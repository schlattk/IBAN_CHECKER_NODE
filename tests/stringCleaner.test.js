const checker = require('../public/javascripts/checker')
const stringCleaner = require('../public/javascripts/stringCleaner')

describe('stringCleaner',() =>{
    //stringCleaner("123  123,,");
  test('it removes spaces and commas and returns a string',() =>{
      expect(stringCleaner("123  123,, ")).toBe('123123');
  });
});
