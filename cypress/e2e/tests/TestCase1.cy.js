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

  it("Click on 'Signup / Login' button", () => {
    NavigationBar.clickSignUpLogin();
  });

  it("Verify 'New User Signup!' is visible", () => {
    NavigationBar.testNewUserSignup();
  });

  it('Should register a new user', () => {
    SignUp.testRegisterUser();
  });

  it('Should verify the user is created', () => {
    SignUp.verifyAccountCreated();
  });
  
  it('Should verify the user is logged in', () => {
    SignUp.verifyAccountLoggedIn();
  });

  it("Click 'Delete Account' button", () => {
    SignUp.verifyAccountDeletion();
  });

  it("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", () => {
    SignUp.verifyAccountDeleted();
  });

  
});