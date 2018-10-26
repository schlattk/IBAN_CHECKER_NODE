const checker = require ('../public/javascripts/checker')

describe('Test_iban class',() =>{
    let test_checker = new checker(1);
  test('it has a number',() =>{
      expect(test_checker.iban).toBe('1');
  });
  test('it has a divisor',() =>{
      expect(test_checker.divisor).toBe(97);
  });
  test('it has a valid variable',() =>{
      expect(test_checker.valid).toBeDefined();
  });
  test('it has a transform function',() =>{
      expect(test_checker.transform).toBeDefined();
  });
  test('it has a calc function',() =>{
      expect(test_checker.calc).toBeDefined();
  });
  test('has a check function',() =>{
      expect(test_checker.check).toBeDefined();
  });

});

describe('has functions that transform and check the IBAN',() =>{
  let test_checker = new checker('DE19760300800930875295');
  test('converts the mixed string into a transformed numberstring ',() =>{
      expect(test_checker.transform('DE19760300800930875295')).toBe('760300800930875295131419');
  });
  test('it works out whether a iban is valid or not',() =>{
      expect(test_checker.check()).toBeTruthy();
  })


 });
