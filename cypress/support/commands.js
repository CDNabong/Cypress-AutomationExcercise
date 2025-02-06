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
    fullName,
    firstName,
    lastName,
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