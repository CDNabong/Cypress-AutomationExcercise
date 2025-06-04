import CommonHooks from "../../support/pageObjects/commonHooks";
import NavigationBar from "../../support/pageObjects/NavigationBar";
import SignUp from "../../support/pageObjects/SignUp";

describe('Test Case 1: Register User', () => {

  before(() => {
    // runs once before all tests in the block
    //clears the cookies
    cy.clearCookies();
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks
  NavigationBar.clickSignUpLogin();
  NavigationBar.testNewUserSignup();
  SignUp.testRegisterUser();
  SignUp.verifyAccountCreated();
  SignUp.verifyAccountLoggedIn();
  SignUp.verifyAccountDeletion();
  SignUp.verifyAccountDeleted();
  
});