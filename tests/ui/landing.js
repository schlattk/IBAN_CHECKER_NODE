import { Selector } from 'testcafe';

fixture `Landing Page`
    .page `http://localhost:4000/iban`;

  test('test the landing page', async t => {
    await t
        .expect(Selector('#input-form').innerText).contains('Please enter your IBAN here:');
  });

  test('checking an invalid iban', async t => {
    await t
        .typeText('#input-form', 'xyz')
        .click('#submit')


        .expect(Selector('#output').innerText).eql('Your IBAN is INVALID');
  });

  test('checking a valid iban', async t => {
    await t
        .typeText('#input-form', 'BE71 0961 2345 6769')
        .click('#submit')


        .expect(Selector('#output').innerText).eql('Your IBAN is VALID');
  });
