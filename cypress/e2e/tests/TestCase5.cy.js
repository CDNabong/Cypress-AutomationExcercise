import SignUp from '../../support/pageObjects/SignUp';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import clientAccounts from "../../fixtures/inputs/clients/clientAccounts.json";
import CommonHooks from '../../support/pageObjects/commonHooks';

describe('Test Case 5: Register User with existing email', () => {
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

  it('Signup with invalid credentials', () => {
    SignUp.verifySignUpInvalidCredentials(clientAccounts.client5.firstName, clientAccounts.client5.email);
  });

  it('Verify error notification', () => {
    SignUp.verifySignUpErrorNotification();
  });

});