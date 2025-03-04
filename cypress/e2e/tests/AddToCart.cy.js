import AddToCart from "../../support/pageObjects/AddToCart";

describe('Add to Cart Tests', () => {
  before(() => {
    // Setup code before tests run

    //clears the cookies
    cy.clearCookies();
    cy.visit('/products');
    cy.verifyPageTitle('Automation Exercise - All Products');
  });

  beforeEach(() => {
    // Code to run before each test
  });

  afterEach(() => {
    // Code to run after each test
  });

  after(() => {
    // Cleanup code after all tests run
  });
  
  it('Add to Cart', () => {
    AddToCart.menAddToCart();
  });

});