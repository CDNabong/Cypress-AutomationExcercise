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

  it("Click on 'Products' button", () => {
      NavigationBar.clickProducts();
  });
    
  it("Verify user is landed to all products page successfully", () => {
    cy.verifyPageTitle('Automation Exercise - All Products');
  });

  it("Enter product name in search input and click search button", () => {
    Products.searchProduct('Jeans');
  });

  it("Verify all the products related to search are visible", () => {
    Products.searchedProductResult(33, 35, 37);
  });

});