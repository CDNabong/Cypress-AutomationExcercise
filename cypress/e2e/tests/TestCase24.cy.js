import Products from '../../support/pageObjects/Products';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import SignUp from "../../support/pageObjects/SignUp";
import Payments from "../../support/pageObjects/Payment"

describe('Test Case 24: Download Invoice after purchase order', () => {
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

  it("Click on 'Signup / Login' button", () => {
    NavigationBar.clickSignUpLogin();
  });

  it("Verify 'ACCOUNT CREATED!' and click 'Continue' button", () => {
    NavigationBar.verifyNewUserSignup();
    SignUp.testRegisterUser();
    SignUp.verifyAccountCreated();
  });

  it("Verify ' Logged in as username' at top", () => {
    SignUp.verifyAccountLoggedIn();
  });

  it("Click 'Add to cart' on Product 1,2, and 3", () => {
    Products.addToCart(1, 2, 3);
  });

  it("Click 'Cart' button", () => {
    NavigationBar.clickCart();
  });

  it("Verify both products are added to Cart", () => {
    Products.verifyCartProducts(1, 2, 3);
  });

  it("Verify their prices, quantity and total price", () => {
    Products.verifyCartProductsDetails(1, 2, 3);
  });

  it("Click Proceed To Checkout", () => {
    Products.clickCheckoutButton();
  });

  it("Verify that the delivery address is same address filled at the time registration of account", () => {
    Payments.verifyDeliveryAddress();
  });

  it("Verify that the billing address is same address filled at the time registration of account", () => {
    Payments.verifyBillingAddress();
  });

  it("Enter description in comment text area and click 'Place Order'", () => {
    Products.enterDescription();
    Products.clickPlaceOrder();
  });

  it("Enter payment details: Name on Card, Card Number, CVC, Expiration date", () => {
    Payments.paymentProcess();
  });

  it("Click 'Pay and Confirm Order' button", () => {
    Payments.clickPayAndConfirmOrderButton();
  });

  it("Verify success message 'Your order has been placed successfully!'", () => {
    Payments.verifySuccessPaymentNotification();
  });

  it("Click 'Download Invoice' button and verify invoice is downloaded successfully.", () => {
    Payments.clickDownloadInvoice();
  });

  it("Click 'Delete Account' button", () => {
    SignUp.verifyAccountDeletion();
  });

  it("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", () => {
    SignUp.verifyAccountDeleted();
  });

});