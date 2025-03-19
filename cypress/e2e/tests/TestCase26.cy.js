import Footer from '../../support/pageObjects/Footer';

describe("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality", () => {

  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies();
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
    cy.log('Test case finished');
  })

  after(() => {
    // runs once after all tests in the block
    //clears the cookies
    cy.clearCookies()
  })

  it(" Scroll down page to bottom", () => {
    cy.scrollTo('bottom')
  });

  it("Verify text 'SUBSCRIPTION'", () => {
    Footer.verifySubscriptionText();
    cy.wait(3000)
  });

  it("Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen", () => {
    cy.scrollTo('top').its('scrollY').should('eq', 0);
  });
  
});