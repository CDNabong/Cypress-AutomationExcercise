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
    Login.testUsernameField(clientAccounts.invalidClient.email);
    Login.testPasswordField(clientAccounts.invalidClient.password);
    Login.testLoginButton();
  });

  it('Verify error notification', () => {
    Login.testErrorNotification();
  });
  
});