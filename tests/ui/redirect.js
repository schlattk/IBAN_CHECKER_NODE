import { ClientFunction } from 'testcafe';

fixture `My Fixture`
    .page `http://localhost:4000/iban`;

const getPageUrl = ClientFunction(() => window.location.href);

test('Check that iban redirects to display page', async t => {
    await t
      .typeText('#input-form', 'xyz')
      .click('#submit')
      .expect(getPageUrl()).eql('http://localhost:4000/iban/display/?valid=INVALID');
});

test('Check that display page redirects to iban page', async t => {
    await t
      .typeText('#input-form', 'xyz')
      .click('#submit')
      .click('#back_to_iban')
      .expect(getPageUrl()).eql('http://localhost:4000/iban?');
});
