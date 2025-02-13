const selectors = {
  checkout: '.btn.btn-default.check_out',
  nameOnCard: '[data-qa="name-on-card"]',
  cardNumber: '[data-qa="card-number"]',
  cvc: '[data-qa="cvc"]',
  expirationMonth: '[data-qa="expiry-month"]',
  expirationYear: '[data-qa="expiry-year"]',
  payConfirmOrder: '[data-qa="pay-button"]',
  orderPlaced: '[data-qa="order-placed"]',
  continue: '[data-qa="continue-button"]'
}

const checkoutProcess = () => {
  cy.get(selectors.checkout)
    .should('be.visible')
    .should('contain', 'Proceed To Checkout')
    .click();
  cy.verifyPageTitle('Automation Exercise - Checkout');
  cy.get(selectors.checkout)
    .should('be.visible')
    .should('contain', 'Place Order')
    .click();
}

const paymentProcess = () => {
  cy.verifyPageTitle('Automation Exercise - Payment');
  cy.get('.heading').should('contain', 'Payment');

  cy.get(selectors.nameOnCard)
    .should('be.visible')
    .type('Test User')

  cy.get(selectors.cardNumber)
    .should('be.visible')
    .type('4242424242424242')
  
  cy.get(selectors.cvc)
    .should('be.visible')
    .type('123')

  cy.get(selectors.expirationMonth)
    .should('be.visible')
    .type('12')
  
  cy.get(selectors.expirationYear)
    .should('be.visible')
    .type('2030')

  cy.get(selectors.payConfirmOrder)
    .should('be.visible')
    .should('contain', 'Pay and Confirm Order')
    .click();
  
  cy.get(selectors.orderPlaced)
    .should('be.visible')
    .should('contain', 'Order Placed!');
  
  cy.verifyPageTitle('Automation Exercise - Order Placed');
  cy.url().should('contain', '/payment_done');

  cy.get(selectors.continue)
    .should('be.visible')
    .should('contain', 'Continue')
    .click();
  
}

class Checkout {

  static verifyCheckoutProcess() {
    checkoutProcess();
    paymentProcess();
  }

}

export default Checkout;
