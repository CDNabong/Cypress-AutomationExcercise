import Products from '../../support/pageObjects/Products';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import CommonHooks from '../../support/pageObjects/commonHooks';

describe('Test Case 17: Remove Products From Cart', () => {
  before(() => {
    // runs once before all tests in the block
    //clears the cookies
    cy.clearCookies()
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks

  it("Add product and click 'Add to cart'", () => {
    Products.verifyAddToCart(2);
  });

  it("Click on 'Cart' button", () => {
    NavigationBar.verifyCart();
  });

  it("Verify product is in cart", () => {
    Products.verifyProductExists(2);
  });  

  it("Click 'X' button corresponding to particular product", () => {
    Products.verifyProductRemoval(2);
  });
    
});