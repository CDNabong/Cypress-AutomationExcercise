import Products from '../../support/pageObjects/Products';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import SignUp from "../../support/pageObjects/SignUp";
import Payments from "../../support/pageObjects/Payment";
import CommonHooks from '../../support/pageObjects/commonHooks';

describe('Test Case 14: Place Order: Register while Checkout', () => {
  before(() => {
    // runs once before all tests in the block
    //clears the cookies
    cy.clearCookies()
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks

  it("Add product and click 'Add to cart'", () => {
    Products.verifyAddToCart(2);
  });
  
  it("Click on 'Cart' button", () => {
    NavigationBar.verifyCart();
  });

  it("Click Proceed To Checkout", () => {
    Products.verifyCheckoutButton();
  });

  it("Click 'Register / Login' button", () => {
    Products.verifyRegisterLoginLink();
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

  it("Click on 'Cart' button", () => {
    NavigationBar.verifyCart();
  });

  it("Click Proceed To Checkout", () => {
    Products.verifyCheckoutButton();
  });

  it("Verify Address Details and Review Your Order", () => {
    Payments.verifyDeliveryAddress();
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

  it("Click 'Delete Account' button", () => {
    SignUp.verifyAccountDeletion();
  });

  it("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", () => {
    SignUp.verifyAccountDeleted();
  });

});