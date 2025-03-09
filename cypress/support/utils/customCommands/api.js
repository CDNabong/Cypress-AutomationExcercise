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


/**
* Execute API Request
 * @param {JSON} requestBody - API request
 * @param {Number} expectedStatusCode - status code
*/
Cypress.Commands.add('executeAPI', (requestBody, expectedStatusCode, retry = 1) => {
  cy.request(requestBody).then((res) => {
    if (retry < 4 && res.status !== expectedStatusCode) {
      cy.log('Perform ' + retry + ' out of 3');
      retry++;
      cy.executeAPI(requestBody, expectedStatusCode, retry);
      cy.delay(10000);
    } else {
      expect(res.status).to.eq(expectedStatusCode);
      return JSON.parse(JSON.stringify(res));
    }
  });
});

// Setting the API endpoint to make it accessible to other API commands
const apiUrl = Cypress.env('apiUrl');

/**
 * Get all products list and verify response
 */
Cypress.Commands.add('verifyProductsList', () => {
  cy.executeAPI({
    method: "GET",
    url: `${apiUrl}productsList`,
    failOnStatusCode: false,
  }, 200)
});

/**
 * Get all brand list and verify response
 */
Cypress.Commands.add('verifyBrandsList', () => {
  cy.executeAPI({
    method: "GET",
    url: `${apiUrl}brandsList`,
    failOnStatusCode: false,
  }, 200)
});

/**
 * Search for a product
 */
Cypress.Commands.add('verifySearchProduct', (product) => {
  cy.executeAPI({
    method: "POST",
    url: `${apiUrl}searchProduct`,
    failOnStatusCode: false,
    form: true,
    body: {
      search_product: product,
    }
  }, 200);
});



/**
 * Verify valid account details
 */
Cypress.Commands.add('verifyValidLogin', (email, password) => {
  cy.executeAPI({
    method: "POST",
    url: `${apiUrl}verifyLogin`,
    failOnStatusCode: false,
    form: true,
    body: {
      email: email,
      password: password,
    }
  }, 200);
});

/**
 * Generate random user and register via API
 */
Cypress.Commands.add('createRandomUserAPI', () => {

  // Generate random birth date
  const birthDate = faker.date.birthdate();

  // Generate random user data
  const randomUser = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10, memorable: true }),
    title: faker.person.prefix(),
    birth_date: faker.date.getDate(),
    birth_month: (faker.date.birthdate().getMonth() + 1).toString(),
    birth_year: birthDate.getFullYear(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: faker.location.country(),
    zipcode: faker.location.zipCode(),
    state: faker.location.state(),
    city: faker.location.city(),
    mobile_number: faker.phone.number()
  };

  // Make API request to create user
  cy.executeAPI({
    method: "POST",
    url: `${Cypress.env('apiUrl')}createAccount`,
    failOnStatusCode: false,
    form: true,
    body: randomUser
  }, 201).then(user => {
    // Store user data for later use
    cy.wrap(randomUser).as('randomUser');
    return randomUser;
  });
});

/**
 * Verify account using email
 */
Cypress.Commands.add('verifyUserEmail', (email) => {
  cy.executeAPI({
    method: "GET",
    url: `${apiUrl}getUserDetailByEmail`,
    qs: {  // 'qs' for query string parameters
      email: email
    },
    failOnStatusCode: false,
  }, 200);
});

/**
 * Delete account using email and password
 */
Cypress.Commands.add('deleteUserAccount', (email, password) => {
  cy.executeAPI({
    method: "DELETE",
    url: `${apiUrl}deleteAccount`,
    body: { // 'body' for request body parameters
      email: email,
      password: password
    },
    failOnStatusCode: false,
  }, 200);
});