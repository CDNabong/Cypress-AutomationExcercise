import Products from '../../support/pageObjects/Products';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import Payments from "../../support/pageObjects/Payment";
import Login from "../../support/pageObjects/Login";
import CommonHooks from '../../support/pageObjects/commonHooks';

describe('Test Case 16: Place Order: Login before Checkout', () => {
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

  it('Enter login credentials', () => {
    Login.validateUserLogin('client2');
  });

  it('Verify user is logged in', () => {
    Login.validateUserLoggedIn('client2');
  });

  it("Add product and click 'Add to cart'", () => {
    Products.verifyAddToCart(2);
  });

  it("Click on 'Cart' button", () => {
    NavigationBar.verifyCart();
  });

  it("Verify product is in cart", () => {
    Products.verifyProductExists(2);
  });

  it("Click Proceed To Checkout", () => {
    Products.verifyCheckoutButton();
  });

  it("Verify Address Details and Review Your Order", () => {
    Login.verifyDeliveryAddress('client2');
  });

  it("Click on 'Cart' button", () => {
    NavigationBar.verifyCart();
  });

  it("Click Proceed To Checkout", () => {
    Products.verifyCheckoutButton();
  });

  it("Enter description in comment text area", () => {
    Products.verifyDescription();
  });

  it("Click 'Place Order'", () => {
    Products.verifyOrderAdded();
  });

  it("Enter payment details: Name on Card, Card Number, CVC, Expiration date", () => {
    Payments.verifyPaymentProcess();
  });

  it("Click 'Pay and Confirm Order' button", () => {
    Payments.verifyPayAndConfirmOrderButton();
  });

  it("Verify success message 'Your order has been placed successfully!'", () => {
    Payments.verifySuccessPaymentNotification();
  });

});