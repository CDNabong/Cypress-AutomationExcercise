import NavigationBar from '../../support/pageObjects/NavigationBar';
import Footer from '../../support/pageObjects/Footer';
import CommonHooks from '../../support/pageObjects/commonHooks';

describe('Test Case 11: Verify Subscription in Cart page', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks
  NavigationBar.verifyCart();
  Footer.subscriptionText();
  Footer.verifyEmailForSubscription();

});