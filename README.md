IBAN CHECKER NODE app

App is implemented using Express and Javascript class

User can input an international bank account number (IBAN) and test its validity

Unit tests using Jest

Integration tests with Testcafe

Setup:

npm install

running server with: npm start or DEBUG=iban_checker_node:* npm start

run Jest tests with: npm tests

run integration tests with: npm run ui or testcafe chrome ./tests/ui
