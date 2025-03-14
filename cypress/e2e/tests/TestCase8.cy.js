import NavigationBar from '../../support/pageObjects/NavigationBar';
import Products from '../../support/pageObjects/Products';

describe('Test Case 8: Verify All Products and product detail page', () => {
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

  it("Verify user is landed to all products page", () => {
    cy.verifyPageTitle('Automation Exercise - All Products');
  });

  it("Click on 'View Product'", () => {
    Products.viewProductNumber(3);
  });

  it("Verify user is landed to product detail page", () => {
    cy.verifyPageTitle('Automation Exercise - Product Details');
  });

  it("Verify that detail detail is visible: product name, category, price, availability, condition, brand", () => {
    Products.verifyProductDetails(3);
  });

});