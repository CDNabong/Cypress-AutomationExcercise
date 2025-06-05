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
  NavigationBar.clickSignUpLogin();
  Login.validateUserLogin('client2');
  Login.validateUserLoggedIn('client2');
  Products.verifyAddToCart(2);
  NavigationBar.verifyCart();
  Products.verifyProductExists(2);
  Products.verifyCheckoutButton();
  Login.verifyDeliveryAddress('client2');
  NavigationBar.verifyCart();
  Products.verifyCheckoutButton();
  Products.verifyDescription();
  Products.verifyOrderAdded();
  Payments.verifyPaymentProcess();
  Payments.verifyPayAndConfirmOrderButton();
  Payments.verifySuccessPaymentNotification();

  // it("Click 'Delete Account' button", () => {
  //   SignUp.verifyAccountDeletion();
  // });

  // it("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", () => {
  //   SignUp.verifyAccountDeleted();
  // });

});