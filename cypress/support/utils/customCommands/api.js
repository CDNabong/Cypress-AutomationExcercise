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

/**
 * Get all products list and verify response
 */
Cypress.Commands.add('verifyProductsList', () => {
  cy.executeAPI({
    method: "GET",
    url: `${Cypress.env('apiUrl')}productsList`,
    failOnStatusCode: false,
  }, 200);
});

/**
 * Get all brand list and verify response
 */
Cypress.Commands.add('verifyBrandsList', () => {
  cy.executeAPI({
    method: "GET",
    url: `${Cypress.env('apiUrl')}brandsList`,
    failOnStatusCode: false,
  }, 200);
});

/**
 * Search for a product
 */
Cypress.Commands.add('verifySearchProduct', (product) => {
  cy.executeAPI({
    method: "POST",
    url: `${Cypress.env('apiUrl')}searchProduct`,
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
    url: `${Cypress.env('apiUrl')}verifyLogin`,
    failOnStatusCode: false,
    form: true,
    body: {
      email: email,
      password: password,
    }
  }, 200);
});

/**
 * Verify account using email
 */
Cypress.Commands.add('verifyUserEmail', (email) => {
  cy.executeAPI({
    method: "GET",
    url: `${Cypress.env('apiUrl')}getUserDetailByEmail`,
    qs: {  // 'qs' for query string parameters
      email: email
    },
    failOnStatusCode: false,
  }, 200);
});