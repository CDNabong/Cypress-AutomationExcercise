import SignUp from "../../support/pageObjects/SignUp";

const selectors = {
  cardName: '[data-qa="name-on-card"]',
  cardNumber: '[data-qa="card-number"]',
  cvc: '[data-qa="cvc"]',
  expiryMonth: '[data-qa="expiry-month"]',
  expiryYear: '[data-qa="expiry-year"]',
  payButton: '[data-qa="pay-button"]',
  orderPlaced: '[data-qa="order-placed"]',
  deliveryCompany: '#address_delivery > li:nth-child(3)',
  deliveryAddressCity: '#address_delivery > li:nth-child(4)',
  deliveryFullAddress: '#address_delivery > li.address_city.address_state_name.address_postcode',
  deliveryCountry: '#address_delivery > li.address_country_name',
  deliveryContactNumber: '#address_delivery > li.address_phone',
  billingCompany: '#address_invoice > li:nth-child(3)',
  billingAddressCity: '#address_invoice > li:nth-child(4)',
  billingFullAddress: '#address_invoice > li.address_city.address_state_name.address_postcode',
  billingCountry: '#address_invoice > li.address_country_name',
  billingContactNumber: '#address_invoice > li.address_phone',
  downloadInvoice: '.btn-default.check_out'
}

const deliveryAddress = () => {
  // Will only proceed when user data is available
  cy.wrap(SignUp.userData).should('not.be.null').then((userData) => {
    cy.checkElemContainsText(selectors.deliveryCompany, `${userData.text}`);
    cy.checkElemContainsText(selectors.deliveryAddressCity, `${userData.streetAddress}`);
    cy.checkElemContainsText(selectors.deliveryFullAddress, `${userData.city} ${userData.state} ${userData.zipCode}`);
    cy.checkElemContainsText(selectors.deliveryCountry, 'United States');
    cy.checkElemContainsText(selectors.deliveryContactNumber, `${userData.mobile}`);
  });
}

const paymentProcess = () => {
  cy.completePayment().then((card) => {
  cy.get(selectors.cardName).type(card.cardName);
  cy.get(selectors.cardNumber).type(card.cardNumber);
  cy.get(selectors.cvc).type(card.cvc);
  cy.get(selectors.expiryMonth).type(card.expiryMonth);
  cy.get(selectors.expiryYear).type(card.expiryYear);
  });
}

const clickPayAndConfirmOrderButton = () => {
  cy.clickElemContainsText(selectors.payButton, 'Pay and Confirm Order');
}

const successulPaymentNotification = () => {
  cy.checkElemContainsText(selectors.orderPlaced, 'Order Placed!');
}





class Payments {

  static verifyPaymentProcess() {
    it("Enter payment details: Name on Card, Card Number, CVC, Expiration date", () => {
      paymentProcess();
    });
  }

  static verifyPayAndConfirmOrderButton() {
    it("Click 'Pay and Confirm Order' button", () => {
      clickPayAndConfirmOrderButton();
    });
  }

  static verifySuccessPaymentNotification() {
    it("Verify success message 'Your order has been placed successfully!'", () => {
      successulPaymentNotification();
    });
  }

  static verifyDeliveryAddress() {
    it("Verify Address Details and Review Your Order", () => {
      deliveryAddress();
    });
  }

  static verifyBillingAddress() {
    // Will only proceed when user data is available
    cy.wrap(SignUp.userData).should('not.be.null').then((userData) => {
      cy.checkElemContainsText(selectors.billingCompany, `${userData.text}`);
      cy.checkElemContainsText(selectors.billingAddressCity, `${userData.streetAddress}`);
      cy.checkElemContainsText(selectors.billingFullAddress, `${userData.city} ${userData.state} ${userData.zipCode}`);
      cy.checkElemContainsText(selectors.billingCountry, 'United States');
      cy.checkElemContainsText(selectors.billingContactNumber, `${userData.mobile}`);
    });
  }

  static clickDownloadInvoice() {
    cy.clickElemContainsText(selectors.downloadInvoice, 'Download Invoice');
  }

}

export default Payments;