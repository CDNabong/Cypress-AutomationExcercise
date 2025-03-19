import NavigationBar from '../../support/pageObjects/NavigationBar';
import Products from '../../support/pageObjects/Products';

describe('Test Case 21: Add review on product', () => {

  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies();
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
    cy.log('Test case finished');
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

  it("Click on 'View Product'", () => {
    Products.viewProductNumber(5);
  });

  it("Verify 'Write Your Review' is visible", () => {
    Products.verifyWriteReviewIndicator();
  });

  it("Enter name, email and review", () => {
    Products.reviewProduct();
  });

  it("Verify success message 'Thank you for your review.'", () => {
    Products.verifyReviewSuccessNotification();
  });
  
});