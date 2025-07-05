import Products from '../../support/pageObjects/Products';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import SignUp from "../../support/pageObjects/SignUp";
import Payments from "../../support/pageObjects/Payment"
import CommonHooks from '../../support/pageObjects/commonHooks';

describe('Test Case 23: Verify address details in checkout page', () => {
  before(() => {
    // runs once before all tests in the block
    //clears the cookies
    cy.clearCookies()
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks

  it("Click on 'Signup / Login' button", () => {
    NavigationBar.clickSignUpLogin();
  });

  it("Verify 'New User Signup!' is visible", () => {
    NavigationBar.testNewUserSignup();
  });

  it('Should register a new user', () => {
    SignUp.testRegisterUser();
  });

  it('Should verify the user is created', () => {
    SignUp.verifyAccountCreated();
  });

  it('Should verify the user is logged in', () => {
    SignUp.verifyAccountLoggedIn();
  });

  it("Add product and click 'Add to cart'", () => {
    Products.verifyAddToCart(1, 2, 3);
  });

  it("Click on 'Cart' button", () => {
    NavigationBar.verifyCart();
  });

  it("Verify both products are added to Cart", () => {
    Products.verifyCartProducts(1, 2, 3);
  });

  it("Verify their prices, quantity and total price", () => {
    Products.verifyCartProductsDetails(1, 2, 3);
  });

  it("Click Proceed To Checkout", () => {
    Products.verifyCheckoutButton();
  });

  it("Verify Address Details and Review Your Order", () => {
    Payments.verifyDeliveryAddress();
  });

  it("Verify that the billing address is same address filled at the time registration of account", () => {
    Payments.verifyBillingAddress();
  });
  
  it("Click 'Delete Account' button", () => {
    SignUp.verifyAccountDeletion();
  });

  it("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", () => {
    SignUp.verifyAccountDeleted();
  });


});