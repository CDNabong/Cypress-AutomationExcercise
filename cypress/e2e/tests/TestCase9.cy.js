import NavigationBar from '../../support/pageObjects/NavigationBar';
import Products from '../../support/pageObjects/Products';

describe('Test Case 9: Search Product', () => {
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

  it("Click on 'Products' button", () => {
    NavigationBar.clickProducts();
  });

  it("Verify user is landed to all products page successfully", () => {
    cy.verifyPageTitle('Automation Exercise - All Products');
  });

  it("Enter product name in search input and click search button", () => {
    Products.clickSearchProduct('Jeans');
  });

  it("Verify 'SEARCHED PRODUCTS' is visible", () => {
    Products.verifySearchedProduct();
  });

  it("Verify all the products related to search are visible", () => {
    Products.verifySearchedProductResult();
  });

});