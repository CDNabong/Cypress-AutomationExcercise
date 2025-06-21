import CommonHooks from "../../support/pageObjects/commonHooks";
import { faker } from '@faker-js/faker';

describe('Verify API tests', () => {
  const apiUrl = Cypress.env('apiUrl');
  before(() => {
    // Setup code before tests run
    cy.visit('/');
  });

  CommonHooks.CommonBeforeEachAfterEachHooks

  /*
  it('API 1: Get All Products List', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}productsList`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      // expect(response.body).to.have.property('products').with.lengthOf(43);
      const products = response.body.products;
      console.log(products);
      expect(products).to.be.an('array');
      cy.log(response.body);
      cy.log(JSON.stringify(response.body));
    });
  })

  it('API 3: Get All Brands List', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}brandsList`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  })

  it('API 5: POST To Search Product', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}searchProduct`,
      form: true,
      body: {
        search_product: 'T-shirt'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  })
  */
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

  it('API 10: POST To Verify Login with invalid details', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}verifyLogin`,
      form: true,
      body: {
        email: email,
        password: password,
      }
    }).then((response) => {
      const verifyInvalidLoginResponse = JSON.stringify(response.body)
      expect(response.status).to.eq(200);
      expect(verifyInvalidLoginResponse).to.include(404); // check if the response contains 404
      expect(verifyInvalidLoginResponse).to.include('User not found!'); // check if the response contains 'User not found!'
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
      const verifyCreatedUserResponse = JSON.stringify(response.body);
      expect(response.status).to.eq(200);
      expect(verifyCreatedUserResponse).to.include(201); // check if the response contains '201'
      expect(verifyCreatedUserResponse).to.include('User created!'); // check if the response contains 'User created!'
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
      const verifyValidLoginResponse = JSON.stringify(response.body);
      expect(response.status).to.eq(200);
      expect(verifyValidLoginResponse).to.include(200); // check if the response contains 200
      expect(verifyValidLoginResponse).to.include('User exists!'); // check if the response contains 'User exists!'
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
    }).then((response) => {
      const verifyDeleteResponse = JSON.stringify(response.body)
      expect(response.status).to.eq(200);
      expect(verifyDeleteResponse).to.include(200); // check if the response contains 404
      expect(verifyDeleteResponse).to.include('Account deleted!'); // check if the response contains 'User not found!'
    });
  })



});