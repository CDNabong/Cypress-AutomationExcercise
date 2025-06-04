import Products from '../../support/pageObjects/Products';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import Payments from "../../support/pageObjects/Payment";
import Login from "../../support/pageObjects/Login";

describe('Test Case 16: Place Order: Login before Checkout', () => {
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

  it('Login with valid credentials', () => {
    Login.testUsernameField('client2');
    Login.testPasswordField('client2');
    Login.testLoginButton();
  });

  it('Verify that user is logged in', () => {
    Login.testUserLoggedIn('client2');
  });
  

  it("Add products to cart", () => {
    Products.addToCart(2);
  });

  it("Click 'Cart' button", () => {
    NavigationBar.clickCart();
  });

  it("Verify user is landed to product detail page successfully", () => {
    cy.verifyPageTitle('Automation Exercise - Checkout');
  });

  it("Verify product is in cart", () => {
    Products.verifyProductExists(2);
  });

  it("Click Proceed To Checkout", () => {
    Products.clickCheckoutButton();
  });

  it("Verify Address Details and Review Your Order", () => {
    Login.verifyDeliveryAddress('client2');
  });

  it("Click 'Cart' button", () => {
    NavigationBar.clickCart();
  });

  it("Click Proceed To Checkout", () => {
    Products.clickCheckoutButton();
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

  // it("Click 'Delete Account' button", () => {
  //   SignUp.verifyAccountDeletion();
  // });

  // it("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", () => {
  //   SignUp.verifyAccountDeleted();
  // });

});