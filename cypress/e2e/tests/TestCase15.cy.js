import Products from '../../support/pageObjects/Products';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import SignUp from "../../support/pageObjects/SignUp";
import Payments from "../../support/pageObjects/Payment";
import CommonHooks from '../../support/pageObjects/commonHooks';

describe('Test Case 15: Place Order: Register before Checkout', () => {
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
  Products.verifyAddToCart(2);
  NavigationBar.verifyCart();
  Products.verifyCheckoutButton();
  Payments.verifyDeliveryAddress();
  NavigationBar.verifyCart();
  Products.verifyCheckoutButton();
  Products.verifyDescription();
  Products.verifyOrderAdded();
  Payments.verifyPaymentProcess();
  Payments.verifyPayAndConfirmOrderButton();
  Payments.verifySuccessPaymentNotification();
  it("Click 'Delete Account' button", () => {
    SignUp.verifyAccountDeletion();
  });
    it("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", () => {
    SignUp.verifyAccountDeleted();
  });
  
});