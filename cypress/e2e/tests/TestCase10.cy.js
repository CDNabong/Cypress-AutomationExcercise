import CommonHooks from '../../support/pageObjects/commonHooks';
import Footer from '../../support/pageObjects/Footer';

describe('Test Case 10: Verify Subscription in home page', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks

  it("Verify text 'SUBSCRIPTION'", () => {
    Footer.verifySubscriptionText();
  });

  it(" Enter email address in input and click arrow button'", () => {
    Footer.enterEmailForSubscription();
  });

  it("Verify success message 'You have been successfully subscribed!' is visible", () => {
    Footer.verifySuccessNotification();
  });

});