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
  Products.verifyAddToCart(2);
  NavigationBar.verifyCart();
  Products.verifyProductExists(2);
  Products.verifyProductRemoval(2);
  Products.verifyProductRemoved(2);
  
});