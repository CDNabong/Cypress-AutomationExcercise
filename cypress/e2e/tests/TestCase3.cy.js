import Login from "../../support/pageObjects/Login";
import clientAccounts from "../../fixtures/inputs/clients/clientAccounts.json";
import NavigationBar from '../../support/pageObjects/NavigationBar';


describe('Test Case 3: Login User with incorrect email and password', () => {

  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies();
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
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

  it("Click on 'Signup / Login' button", () => {
    NavigationBar.clickSignUpLogin();
  });
  
  it('Login with valid credentials', () => {
    Login.testUsernameField('invalidClient');
    Login.testPasswordField('invalidClient');
    Login.testLoginButton();
  });

  it('Verify error notification', () => {
    Login.testErrorNotification();
  });
  
});