import CommonHooks from '../../support/pageObjects/commonHooks';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import Products from '../../support/pageObjects/Products';

describe('Test Case 19: View & Cart Brand Products', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks
  
  it("Click on 'Products' button", () => {
      NavigationBar.clickProducts();
  });
    
  it("Verify user is landed to all products page successfully", () => {
    cy.verifyPageTitle('Automation Exercise - All Products');
  });
  Products.testBrands();
  Products.verifyBrands('Polo');
  Products.verifyBrands('H&M');
  Products.verifyBrands('Madame');
  Products.verifyBrands('Mast & Harbour');
  Products.verifyBrands('Babyhug');
  Products.verifyBrands('Allen Solly Junior');
  Products.verifyBrands('Kookie Kids');
  Products.verifyBrands('Biba');

});