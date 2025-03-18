import Products from '../../support/pageObjects/Products';
import NavigationBar from '../../support/pageObjects/NavigationBar';

describe('Test Case 17: Remove Products From Cart', () => {
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

  it("Add products to cart", () => {
    Products.addToCart(2);
  });

  it("Click 'Continue Shopping' button", () => {
    Products.clickContinueShopping();
  });

  it("Click 'Cart' button", () => {
    NavigationBar.clickCart();
  });

  it("Verify user is landed to product detail page successfully", () => {
    cy.verifyPageTitle('Automation Exercise - Checkout');
  });

  it("Verify product is in cart", () => {
    Products.verifyProductExists(2);
  });

  it("Click 'X' button corresponding to particular product", () => {
    Products.removeProduct(2);
  });

  it("Verify that product is removed from the cart", () => {
    Products.verifyProductRemoved(2);
  });

});