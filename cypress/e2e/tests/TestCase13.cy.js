import Products from '../../support/pageObjects/Products';
import CommonHooks from '../../support/pageObjects/commonHooks';

describe('Test Case 13: Verify Product quantity in Cart', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks

  it("Click on 'View Product'", () => {
    Products.productNumber(5);
  });

  it("Verify user is landed to product detail page successfully", () => {
    cy.verifyPageTitle('Automation Exercise - Product Details');
  });

  it("Verify that detail detail is visible: product name, category, price, availability, condition, brand", () => {
    Products.productDetails(5);
  });

  it("Increase quantity", () => {
    Products.productQuantity(4);
  });

  it("Click 'Add to cart' button", () => {
    Products.verifyClickAddToCart();
  });

  it("Click 'View Cart' button", () => {
    Products.viewCart();
  });

  it("Verify that product is displayed in cart page with exact quantity", () => {
    Products.verifyProductQuantity(5, 4);
  });

});