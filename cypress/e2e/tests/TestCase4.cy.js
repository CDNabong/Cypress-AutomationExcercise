import NavigationBar from "../../support/pageObjects/NavigationBar";
import Login from "../../support/pageObjects/Login";
import Logout from "../../support/pageObjects/Logout";
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

  it("Click on 'Signup / Login' button", () => {
    NavigationBar.clickSignUpLogin();
  });

  it('Login with valid credentials', () => {
    Login.testUsernameField('client4');
    Login.testPasswordField('client4');
    Login.testLoginButton();
  });

  it('Verify that user is logged in', () => {
    Login.testUserLoggedIn('client4');
  });

  it('Logout user', () => {
    Logout.clickLogout();
  });

});