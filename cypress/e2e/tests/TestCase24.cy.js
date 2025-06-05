import Products from '../../support/pageObjects/Products';
import NavigationBar from '../../support/pageObjects/NavigationBar';
import SignUp from "../../support/pageObjects/SignUp";
import Payments from "../../support/pageObjects/Payment"
import CommonHooks from '../../support/pageObjects/commonHooks';

describe('Test Case 24: Download Invoice after purchase order', () => {
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
  Products.verifyAddToCart(1, 2, 3);
  NavigationBar.verifyCart();
  Products.verifyCartProducts(1, 2, 3);
  Products.verifyCartProductsDetails(1, 2, 3);
  Products.verifyCheckoutButton();
  Payments.verifyDeliveryAddress();
  Payments.verifyBillingAddress();
  Products.verifyDescription();
  Products.verifyOrderAdded();
  Payments.verifyPaymentProcess();
  Payments.verifyPayAndConfirmOrderButton();
  Payments.verifySuccessPaymentNotification();
  Payments.clickDownloadInvoice();
  SignUp.verifyAccountDeletion();
  SignUp.verifyAccountDeleted();

});