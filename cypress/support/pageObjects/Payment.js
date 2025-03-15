const selectors = {
  cardName: '[data-qa="name-on-card"]',
  cardNumber: '[data-qa="card-number"]',
  cvc: '[data-qa="cvc"]',
  expiryMonth: '[data-qa="expiry-month"]',
  expiryYear: '[data-qa="expiry-year"]',
  payButton: '[data-qa="pay-button"]',
  orderPlaced: '[data-qa="order-placed"]',

}

class Payments {

  static paymentProcess() {
    cy.completePayment().then((card) => {
    cy.get(selectors.cardName).type(card.cardName);
    cy.get(selectors.cardNumber).type(card.cardNumber);
    cy.get(selectors.cvc).type(card.cvc);
    cy.get(selectors.expiryMonth).type(card.expiryMonth);
    cy.get(selectors.expiryYear).type(card.expiryYear);
    });
  }

  static clickPayAndConfirmOrderButton() {
    cy.clickElemContainsText(selectors.payButton, 'Pay and Confirm Order');
  }

  static verifySuccessPaymentNotification() {
    cy.checkElemContainsText(selectors.orderPlaced, 'Order Placed!');
  }

}

export default Payments;