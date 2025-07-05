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

  it('Enter login credentials', () => {
    Login.validateUserLogin('client2');
  });

  it('Verify user is logged in', () => {
    Login.validateUserLoggedIn('client2');
  });

});