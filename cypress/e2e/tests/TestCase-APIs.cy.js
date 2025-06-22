import CommonHooks from "../../support/pageObjects/commonHooks";
import { faker } from '@faker-js/faker';

describe('Verify API tests', () => {
  const apiUrl = Cypress.env('apiUrl');
  before(() => {
    // Setup code before tests run
    cy.visit('/');
  });

  CommonHooks.CommonBeforeEachAfterEachHooks

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

  it.skip('API 1: Get All Products List', () => {
    // TODO
  })

  it.skip('API 3: Get All Brands List', () => {
    // TODO
  })

  it.skip('API 5: POST To Search Product', () => {
    // TODO
  })

  it('API 10: POST To Verify Login with invalid details', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}verifyLogin`,
      form: true,
      failOnStatusCode: false, // Add this if you're expecting a 404-style response code inside the body
      body: {
        email: email,
        password: password,
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      const parsedResponse = JSON.parse(response.body)
      expect(parsedResponse).to.have.property('responseCode', 404); // check if the responseCode is 404
      expect(parsedResponse).to.have.property('message', 'User not found!'); // check if the message is 'User not found!'
    });
  })

  it('API 11: POST To Create/Register User Account', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}createAccount`,
      form: true,
      body: {
        firstname: firstName, 
        lastname: lastName, 
        name:  fullName,
        email: email,
        password: password,
        title: 'Mr',
        birth_date: '1',
        birth_month: 'January', 
        birth_year: '1999', 
        company: 'Test Company', 
        address1: streetAddress, 
        address2: streetAddress, 
        country: 'USA', 
        zipcode: zipCode,
        state: state, 
        city: city, 
        mobile_number: mobile
      }
    }).then((response) => {
      const parsedResponse = JSON.parse(response.body);
      expect(response.status).to.eq(200);
      expect(parsedResponse).to.have.property('responseCode', 201); // check if the responseCode is 201
      expect(parsedResponse).to.have.property('message', 'User created!'); // check if the message is 'User created!'
    });
  })

  it('API 14: GET user account detail by email', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}getUserDetailByEmail`,
      form: true,
      qs: { // 'qs' for query string parameters
        email: email,
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      const parsedResponse = JSON.parse(response.body)
      expect(parsedResponse).to.have.property('responseCode', 200); // check if the responseCode is 200
      expect(parsedResponse.user).to.have.property('first_name', firstName); // check if the first_name is firstName
      expect(parsedResponse.user).to.have.property('last_name', lastName); // check if the last_name is lastName
      expect(parsedResponse.user).to.have.property('name', fullName); // check if the name is fullName
      expect(parsedResponse.user).to.have.property('email', email); // check if the email is email
    });
  })

  it('API 7: POST To Verify Login with valid details', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}verifyLogin`,
      form: true,
      body: {
        email: email,
        password: password,
      }
    }).then((response) => {
      const parsedResponse = JSON.parse(response.body);
      expect(response.status).to.eq(200);
      expect(parsedResponse).to.have.property('responseCode', 200); // check if the responseCode is 200
      expect(parsedResponse).to.have.property('message', 'User exists!'); // check if the message is 'User exists!'
    });
  })

  it('API 13: PUT METHOD To Update User Account', () => {
    cy.request({
      method: 'PUT',
      url: `${apiUrl}updateAccount`,
      failOnStatusCode: false, // Add this if you're expecting a 404-style response code inside the body
      form: true,
      body: {
        email: email,
        password: password,
        firstname: lastName, 
        lastname: firstName,
        name: lastName + ' ' + firstName, // Update the name to be lastName firstName
      }
    }).then((response) => {
      const parsedResponse = JSON.parse(response.body);
      expect(response.status).to.eq(200);
      expect(parsedResponse).to.have.property('responseCode', 200); // check if the responseCode is 200
      expect(parsedResponse).to.have.property('message', 'User updated!'); // check if the message is 'User updated!'
    });
  })

  it('API 14: GET user account detail by email', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}getUserDetailByEmail`,
      form: true,
      qs: { // 'qs' for query string parameters
        email: email,
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      const parsedResponse = JSON.parse(response.body)
      expect(parsedResponse).to.have.property('responseCode', 200); // check if the responseCode is 200
      expect(parsedResponse.user).to.have.property('first_name', lastName); // check if the first_name is firstName
      expect(parsedResponse.user).to.have.property('last_name', firstName); // check if the last_name is lastName
      expect(parsedResponse.user).to.have.property('name', `${lastName} ${firstName}`); // check if the name is fullName
      });
  })

  it('API 12: DELETE METHOD To Delete User Account', () => {
    cy.request({
      method: 'DELETE',
      url: `${apiUrl}deleteAccount`,
      form: true,
      body: {
        email: email,
        password: password,
      }
    }).then((response) => { // // Yields response object as first arg
      const parsedResponse = JSON.parse(response.body);
      expect(response.status).to.eq(200);
      expect(parsedResponse).to.have.property('responseCode', 200); // check if the responseCode is 200
      expect(parsedResponse).to.have.property('message', 'Account deleted!'); // check if the message is 'Account deleted!'
    });
  })



});