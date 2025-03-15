import Products from '../../support/pageObjects/Products';

describe('Test Case 13: Verify Product quantity in Cart', () => {
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

  it("Click 'View Product' for any product on home page", () => {
    Products.viewProductNumber(5);
  });

  it("Verify user is landed to product detail page successfully", () => {
    cy.verifyPageTitle('Automation Exercise - Product Details');
  });

  it("Verify that detail detail is visible: product name, category, price, availability, condition, brand", () => {
    Products.verifyProductDetails(5);
  });

  it("Increase quantity to 4", () => {
    Products.increaseQuantity(4);
  });

  it("Click 'Add to cart' button", () => {
    Products.clickAddToCart();
  });

  it("Click 'View Cart' button", () => {
    Products.viewCart();
  });

  it("Verify that product is displayed in cart page with exact quantity", () => {
    Products.verifyProductQuantity(5, 4);
  });

});