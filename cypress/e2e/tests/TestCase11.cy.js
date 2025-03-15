import NavigationBar from '../../support/pageObjects/NavigationBar';
import Footer from '../../support/pageObjects/Footer';

describe('Test Case 11: Verify Subscription in Cart page', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
  })

  after(() => {
    // runs once after all tests in the block
    //clears the cookies
    cy.clearCookies()
  })

  it("Click on 'Cart' button", () => {
    NavigationBar.clickCart();
  });

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