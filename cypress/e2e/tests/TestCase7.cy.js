import CommonHooks from '../../support/pageObjects/commonHooks';
import NavigationBar from '../../support/pageObjects/NavigationBar';

describe('Test Case 7: Verify Test Cases Page', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks

  it("Click on 'Test Cases' button", () => {
    NavigationBar.clickTestCases();
  });

  it("Verify page title test cases", () => {
    cy.verifyPageTitle('Automation Practice Website for UI Testing - Test Cases');
  });

});