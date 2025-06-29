import CommonHooks from "../../support/pageObjects/commonHooks";
import Login from "../../support/pageObjects/Login";
import NavigationBar from '../../support/pageObjects/NavigationBar';

describe('Test Case 2: Login User with correct email and password', () => {

  before(() => {
    // runs once before all tests in the block
    //clears the cookies
    cy.clearCookies();

    // set client account information
    cy.clientAccountInfo();
    
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');

  })
  CommonHooks.CommonBeforeEachAfterEachHooks
  NavigationBar.clickSignUpLogin();
  Login.validateUserLogin('client2');
  Login.validateUserLoggedIn('client2');

});