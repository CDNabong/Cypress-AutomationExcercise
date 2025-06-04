import NavigationBar from '../../support/pageObjects/NavigationBar';
import Products from '../../support/pageObjects/Products';
import CommonHooks from '../../support/pageObjects/commonHooks';

describe('Test Case 9: Search Product', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks
  NavigationBar.clickProducts();
  Products.searchProduct('Jeans');
  Products.searchedProductResult(33, 35, 37);

});