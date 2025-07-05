import Login from "../../support/pageObjects/Login";
import CommonHooks from "../../support/pageObjects/commonHooks";
import NavigationBar from '../../support/pageObjects/NavigationBar';


describe('Test Case 3: Login User with incorrect email and password', () => {

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
    Login.validateUserLogin('invalidClient');  
  });

  it('Verify error notification', () => {
    Login.verifyErrorNotification();
  });


});