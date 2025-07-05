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

  it("Verify that Brands are visible on left side bar", () => {
    Products.testBrands();
  });

  it(`Should verify all brand products are accessible`, () => {
    const allBrands = [
      'Polo',
      'H&M',
      'Madame',
      'Mast & Harbour',
      'Babyhug',
      'Allen Solly Junior',
      'Kookie Kids',
      'Biba'
    ];

    allBrands.forEach(brand => {
      Products.verifyBrands(brand);
    });

  });

});