import NavigationBar from "../../support/pageObjects/NavigationBar";
import Login from "../../support/pageObjects/Login";
import CommonHooks from "../../support/pageObjects/commonHooks";

describe('Test Case 4: Logout User', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks
  NavigationBar.clickSignUpLogin();
  Login.validateUserLogin('client4');
  Login.validateUserLoggedIn('client4');
  Login.verifyLogout() 

});