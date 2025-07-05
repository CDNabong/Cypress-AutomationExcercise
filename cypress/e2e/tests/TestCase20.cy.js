import CommonHooks from "../../support/pageObjects/commonHooks";
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
  CommonHooks.CommonBeforeEachAfterEachHooks
  NavigationBar.clickProducts();
  Products.searchProduct('Jeans');
  Products.searchedProductResult(33, 35, 37);
  Products.verifyAddToCart(33, 35, 37);
  it("Click on 'Signup / Login' button", () => {
    NavigationBar.clickSignUpLogin();
  });
  it('Enter login credentials', () => {
    Login.validateUserLogin('client2');
  });

  it('Verify user is logged in', () => {
    Login.validateUserLoggedIn('client2');
  });
  NavigationBar.verifyCart();
  Products.verifyCartProductsDetails(33, 35, 37);
  Products.verifyProductRemoval(33, 35, 37);
  Products.verifyProductRemoved(33, 35, 37);
});