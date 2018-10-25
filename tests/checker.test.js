const checker = require ('../public/javascripts/checker')

// test('adds 1 + 2 to equal 3', () =>{
//   expect(sum(1,2)).toBe(3);
// });

describe('Test_iban',() =>{
  test('it has a number',() =>{
      let test_checker = new checker(1);
      expect(test_checker.iban).toBe('1');
  });
});
//   it ('has a divisor',function(){
//       expect(iban_checker.divisor).toBe(97);
//   });
//   it ('has a valid/invalid variable',function(){
//       expect(iban_checker.valid).toBeDefined();
//   });
//   it('has a transform function', function(){
//       expect(iban_checker.transform).toBeDefined();
//   });
//   it ('has a calc function',function(){
//       expect(iban_checker.calc).toBeDefined();
//   });
//   it ('has a check function',function(){
//       expect(iban_checker.check).toBeDefined();
//   });
//
// });
//
// describe('has a function that transforms the IBAN', function(){
//   let iban_checker = new Test_iban('DE19760300800930875295');
//   it('converts the mixed string into a transformed numberstring ', function(){
//       expect(iban_checker.transform('DE19760300800930875295')).toBe('760300800930875295131419');
//   });
 // });
