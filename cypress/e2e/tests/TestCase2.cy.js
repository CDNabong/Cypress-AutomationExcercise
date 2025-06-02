import CommonHooks from "../../support/pageObjects/commonHooks";
import Login from "../../support/pageObjects/Login";
import NavigationBar from '../../support/pageObjects/NavigationBar';

describe('Test Case 2: Login User with correct email and password', () => {

  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies();
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks

  it("Click on 'Signup / Login' button", () => {
    NavigationBar.clickSignUpLogin();
  });
  
  it('Login with valid credentials', () => {
    Login.testUsernameField('client2');
    Login.testPasswordField('client2');
    Login.testLoginButton();
  });

  it('Verify that user is logged in', () => {
    Login.testUserLoggedIn('client2');
  });
  
});