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
    Footer.subscriptionText();
  });

  it("Enter email address and click arrow button to Verify success message'", () => {
    Footer.verifyEmailForSubscription();
  });

});