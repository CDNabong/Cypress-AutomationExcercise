import CommonHooks from '../../support/pageObjects/commonHooks';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import Products from '../../support/pageObjects/Products';

describe('Test Case 22: Add to cart from Recommended items', () => {

  before(() => {
    // runs once before all tests in the block
    //clears the cookies
    cy.clearCookies();
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks

  it("Scroll down to recommended items", () => {
    cy.get('.recommended_items').scrollIntoView();
  });

  it("Verify 'RECOMMENDED ITEMS' are visible", () => {
    Products.verifyRecommendedItemsHeader();
  });

  it("Click on 'Add To Cart' on Recommended product", () => {
    Products.verifyAddToCartRecommendedItems();
  });

  it("Click on 'Cart' button", () => {
    NavigationBar.verifyCart();
  });

  it("Verify both products are added to Cart", () => {
    Products.verifyCartProducts(4, 5);
  });


});