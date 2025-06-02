import Login from "../../support/pageObjects/Login";
import NavigationBar from '../../support/pageObjects/NavigationBar';
import Products from '../../support/pageObjects/Products';

describe('Test Case 20: Search Products and Verify Cart After Login', () => {

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

  
  NavigationBar.clickProducts();
  

  it("Verify user is landed to all products page successfully", () => {
    cy.verifyPageTitle('Automation Exercise - All Products');
  });

  it("Enter product name in search input and click search button", () => {
    Products.clickSearchProduct('Jeans');
  });

  it("Verify all the products related to search are visible", () => {
    Products.verifySearchedProductResult(33, 35, 37);
  });

  it("Add those products to cart", () => {
    Products.addToCart(33, 35, 37);
  });

  it("Click on 'Signup / Login' button", () => {
    NavigationBar.clickSignUpLogin();
  });
  
  it('Login with valid credentials', () => {
    Login.testUsernameField('client2');
    Login.testPasswordField('client2');
    Login.testLoginButton();
  });

  it('Verify that user is logged in', () => {
    Login.testUserLoggedIn('client2');
  });

  it("Click 'Cart' button", () => {
    NavigationBar.clickCart();
  });

  it("Verify their prices, quantity and total price", () => {
    Products.verifyCartProductsDetails(33, 35, 37);
  });
  
});