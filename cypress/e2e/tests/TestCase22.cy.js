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

  it("Scroll down to recommended items", () => {
    cy.get('.recommended_items').scrollIntoView();
  });

  it("Verify 'RECOMMENDED ITEMS' are visible", () => {
    Products.verifyRecommendedItems();
  });

  it("Click on 'Add To Cart' on Recommended product", () => {
    Products.addToCartRecommended();
  });

  it("Click on 'View Cart' button", () => {
    NavigationBar.clickCart();
  });

  it("Verify that detail detail is visible: product name, category, price, availability, condition, brand", () => {
    Products.verifyCartProducts(4, 5);
  });
  
});