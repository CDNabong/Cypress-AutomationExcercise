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
  
  it("Click on 'Signup / Login' button", () => {
    NavigationBar.clickSignUpLogin();
  });

  it('Enter login credentials', () => {
    Login.validateUserLogin('client4');
  });

  it('Verify user is logged in', () => {
    Login.validateUserLoggedIn('client4');
  });

  it('Logout user', () => {
    Login.verifyLogout() 
  });

});