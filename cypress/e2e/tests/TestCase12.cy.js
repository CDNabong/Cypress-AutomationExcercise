import NavigationBar from '../../support/pageObjects/NavigationBar';
import Products from '../../support/pageObjects/Products';

describe('Test Case 12: Add Products in Cart', () => {
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

  it("Hover over first product and click 'Add to cart'", () => {
    Products.addToCart(1);
  });

  it("Click 'Continue Shopping' button", () => {
    Products.clickContinueShopping();
  });

  it("Hover over second product and click 'Add to cart'", () => {
    Products.addToCart(2, 3);
  });

  it("Click 'View Cart' button", () => {
    Products.viewCart();
  });

  it("Verify both products are added to Cart", () => {
    Products.verifyCartProducts(1, 2, 3);
  });

  it("Verify their prices, quantity and total price", () => {
    Products.verifyCartProductsDetails(1, 2, 3);
  });


});