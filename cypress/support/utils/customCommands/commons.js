// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { faker } from '@faker-js/faker';

Cypress.Commands.add('verifyPageTitle', (expectedTitle) => {
  cy.title().should('eq', expectedTitle);
});

Cypress.Commands.add('skipIfFailed', () => {
  cy.window().then((win) => {
    if (win.testState?.failed) {
      // Skip this test
      cy.state('runnable').skip()
    }
  })
});

Cypress.Commands.add('generateRandomUser', () => {

  const firstName = faker.person.firstName(); // Generate a random first name
  const lastName = faker.person.lastName(); // Generate a random last name
  const fullName = `${firstName} ${lastName}`;  // Combine the first and last name into full name
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@yopmail.com`; // Generate a random email
  const password = faker.internet.password(); // Generate a random password
  const mobile = faker.phone.number({ style: 'national' }); // Generate random phone number
  const streetAddress = faker.location.streetAddress(); // Random street address
  const city = faker.location.city(); // Random city
  const state = faker.location.state(); // Random state
  const zipCode = faker.location.zipCode(); // Random zip code
  const text = faker.lorem.words(2);

  // Return the object with the random user data
  return {
    firstName,
    lastName,
    fullName,
    email,
    password,
    mobile,
    streetAddress,
    city,
    state,
    zipCode,
    text,
  };

});

Cypress.Commands.add('generateRandomText', () => {

  const randomText = faker.lorem.sentences({ min: 1, max: 1 }); // Generate a random sentence

  // Return the object with the randomText
  return {
    randomText,
  };

});

Cypress.Commands.add('generateRandomParagraph', () => {

  const randomParagraph = faker.lorem.paragraphs({ min: 1, max: 2 }) // Generate a random paragraphs

  // Return the object with the randomParagraph
  return {
    randomParagraph,
  };

});

/**
 * Check element containing the text
 * @param {string} elemSelector Element Selector
 * @param {string} text The displayed text of the element
 */
Cypress.Commands.add('checkElemContainsText', (elemSelector, text) => {
  cy.get(elemSelector).contains(text).should('be.visible');
});

/**
* Click element containing the text and click
* @param {string} elemSelector Element Selector
* @param {string} text The displayed text of the element
*/
Cypress.Commands.add('clickElemContainsText', (elemSelector, text) => {
  cy.get(elemSelector)
      .contains(text)
      .should('be.visible')
      .click();
});

/**
 * Check text is visible on the page
 * @param {string} elemSelector Element Selector
 * @param {string} text The displayed text of the element
 */
Cypress.Commands.add('checkVisibleText', (elemSelector, text) => {
  cy.get(elemSelector).should('have.text', text).should('be.visible');
});

/**
 * Types a text in an element and check the value afterwards.
 * @param {string} elemSelector Element Selector
 * @param {string} text The text to type in a text box or text area
 * @param {string} value Value to check after typing
 */
Cypress.Commands.add('typeElemAndCheckValue', (elemSelector, text, value) => {
  cy.get(elemSelector).as('descElem').should('be.visible').type(text); //type in the description
  cy.get('@descElem').should('have.value', value);
});

Cypress.Commands.add('completePayment', () => {

  const cardName = faker.finance.accountName();
  const cardNumber = faker.finance.creditCardNumber();
  const cvc = faker.finance.creditCardCVV();
  const expiryMonth = 11
  const expiryYear = 2030

  // Return the object with the random user data
  return {
    cardName,
    cardNumber,
    cvc,
    expiryMonth,
    expiryYear,
  };

});