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
  Products.productNumber(5);
  Products.productDetails(5);
  Products.productQuantity(4);
  Products.verifyClickAddToCart();
  Products.viewCart();
  Products.verifyProductQuantity(5, 4);

});