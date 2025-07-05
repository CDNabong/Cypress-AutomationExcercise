import CommonHooks from '../../support/pageObjects/commonHooks';
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
  CommonHooks.CommonBeforeEachAfterEachHooks
  
  it("Click on 'Products' button", () => {
    NavigationBar.clickProducts();
  });
    
  it("Verify user is landed to all products page successfully", () => {
    cy.verifyPageTitle('Automation Exercise - All Products');
  });

  it("Click on 'View Product'", () => {
    Products.productNumber(5);
  });

  it("Verify user is landed to product detail page successfully", () => {
    cy.verifyPageTitle('Automation Exercise - Product Details');
  });

  it("Verify 'Write Your Review' is visible", () => {
    Products.verifyWriteReviewIndicator();
  });

  it("Enter name, email and review", () => {
    Products.verifyProductReview();
  });

  it("Verify success message 'Thank you for your review.'", () => {
    Products.verifyReviewSuccessNotification();
  });
  
});