import API from "../../support/pageObjects/API";

describe('Verify API tests', () => {
  before(() => {
    // Setup code before tests run
    cy.visit('/');
  });

  beforeEach(() => {
    // Code to run before each test
  });

  afterEach(() => {
    // Code to run after each test
  });

  after(() => {
    // Cleanup code after all tests run
    //clears the cookies
    cy.clearCookies();
  });
  
  API.validLogin("testclient2@yopmail.com", "client");
  API.productsList();
  API.brandsList();
  API.searchProduct();
  API.getUserEmail("testclient2@yopmail.com");
});