import clientAccounts from "../../fixtures/inputs/clients/clientAccounts.json";

const selectors = {
  loginUsername: '[data-qa=login-email]',
  loginPassword: '[data-qa=login-password]',
  loginButton: '[data-qa=login-button]',
  loggedInAccount: '.fa.fa-user',
  deliveryCompany: '#address_delivery > li:nth-child(3)',
  deliveryAddressCity: '#address_delivery > li:nth-child(4)',
  deliveryFullAddress: '#address_delivery > li.address_city.address_state_name.address_postcode',
  deliveryCountry: '#address_delivery > li.address_country_name',
  deliveryContactNumber: '#address_delivery > li.address_phone'
}

class Login {

  static testUsernameField(clientAccount) {
    cy.get(selectors.loginUsername)
      .should('be.visible')
      .and('have.attr', 'type', 'email')
      .and('have.attr', 'placeholder', 'Email Address')
      .type(clientAccounts[clientAccount].email);
  }

  static testPasswordField(clientAccount) {
    cy.get(selectors.loginPassword)
      .should('be.visible')
      .and('have.attr', 'type', 'password')
      .and('have.attr', 'placeholder', 'Password')
      .type(clientAccounts[clientAccount].password);
  }

  static testLoginButton() {
    cy.get(selectors.loginButton)
      .should('have.text', 'Login')
      .click();
  }

  static testUserLoggedIn(clientAccount) {
    cy.get(selectors.loggedInAccount)
      .should('be.visible')
      .parent()
      .contains(`Logged in as ${clientAccounts[clientAccount].firstName} ${clientAccounts[clientAccount].lastName}`);
  }

  static testErrorNotification() {
    cy.get('p').eq(0)
    .should('have.text', 'Your email or password is incorrect!')
    .and('have.css', 'color', 'rgb(255, 0, 0)');
  }

  static verifyDeliveryAddress(clientAccount) {
    cy.checkElemContainsText(selectors.deliveryCompany, clientAccounts[clientAccount].company);
    cy.checkElemContainsText(selectors.deliveryAddressCity, clientAccounts[clientAccount].address);
    cy.checkElemContainsText(selectors.deliveryFullAddress, `${clientAccounts[clientAccount].city} ${clientAccounts[clientAccount].state} ${clientAccounts[clientAccount].zipCode}`);
    cy.checkElemContainsText(selectors.deliveryCountry, 'United States');
    cy.checkElemContainsText(selectors.deliveryContactNumber, clientAccounts[clientAccount].mobile);
  }

  
}

export default Login;