import CommonHooks from '../../support/pageObjects/commonHooks';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import Products from '../../support/pageObjects/Products';

describe('Test Case 12: Add Products in Cart', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks
  NavigationBar.clickProducts();
  Products.verifyAddToCart(1);
  Products.verifyAddToCart(2, 3);
  NavigationBar.verifyCart();
  Products.verifyCartProducts(1, 2, 3);
  Products.verifyCartProductsDetails(1, 2, 3);
  
});