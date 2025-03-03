import Login from "../../support/pageObjects/Login";
import clientAccounts from "../../fixtures/inputs/clients/clientAccounts.json";

describe('Login with Valid Credentials ', () => {

  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies();
    cy.visit('/login');
    cy.verifyPageTitle('Automation Exercise - Signup / Login');
  })
  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
    cy.log('Test case finished');
  })

  after(() => {
    // runs once after all tests in the block
    //clears the cookies
    cy.clearCookies()
  })
  
  it('Login with valid credentials', () => {
    Login.testUsernameField(clientAccounts.client1.email);
    Login.testPasswordField(clientAccounts.client1.password);
    Login.testLoginButton();
  });

  it('Verify that user is logged in', () => {
    Login.testUserLoggedIn(clientAccounts.client1.firstName, clientAccounts.client1.lastName);
  });
  
});