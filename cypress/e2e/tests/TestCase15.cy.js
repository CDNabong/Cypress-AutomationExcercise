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
  NavigationBar.clickSignUpLogin();
  NavigationBar.testNewUserSignup();
  SignUp.testRegisterUser();
  SignUp.verifyAccountCreated();
  SignUp.verifyAccountLoggedIn();
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
  SignUp.verifyAccountDeletion();
  SignUp.verifyAccountDeleted();
  
});