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
  deliveryContactNumber: '#address_delivery > li.address_phone',
  logout: 'a[href="/logout"]'
}

const testUsernameField = (clientAccount) => {
  cy.typeElemAndCheckValue(selectors.loginUsername, clientAccounts[clientAccount].email, clientAccounts[clientAccount].email);
}

const testPasswordField = (clientAccount) => {
  cy.typeElemAndCheckValue(selectors.loginPassword, clientAccounts[clientAccount].password, clientAccounts[clientAccount].password);
}

const testLoginButton = () => {
  cy.clickElemContainsText(selectors.loginButton, 'Login');
} 

const testUserLoggedIn = (clientAccount) => {
  cy.get(selectors.loggedInAccount)
    .should('be.visible')
    .parent()
    .contains(`Logged in as ${clientAccounts[clientAccount].firstName} ${clientAccounts[clientAccount].lastName}`);
}

const testErrorNotification = () => {
  cy.get('p').eq(0)
    .should('have.text', 'Your email or password is incorrect!')
    .and('have.css', 'color', 'rgb(255, 0, 0)');
}

const clickLogout = () => {
  cy.clickElemContainsText(selectors.logout, 'Logout');
}

const verifyDeliveryAddress = (clientAccount) => {
  cy.checkElemContainsText(selectors.deliveryCompany, clientAccounts[clientAccount].company);
  cy.checkElemContainsText(selectors.deliveryAddressCity, clientAccounts[clientAccount].address);
  cy.checkElemContainsText(selectors.deliveryFullAddress, `${clientAccounts[clientAccount].city} ${clientAccounts[clientAccount].state} ${clientAccounts[clientAccount].zipCode}`);
  cy.checkElemContainsText(selectors.deliveryCountry, 'United States');
  cy.checkElemContainsText(selectors.deliveryContactNumber, clientAccounts[clientAccount].mobile);
}

class Login {

  static validateUserLogin(clientAccount) {
    it('Enter login credentials', () => {
      testUsernameField(clientAccount);
      testPasswordField(clientAccount);
      testLoginButton();
    });
  }

  static validateUserLoggedIn(clientAccount) {
    it('Verify user is logged in', () => {
      testUserLoggedIn(clientAccount);
    });
  }

  static verifyErrorNotification() {
    it('Verify error notification', () => {
      testErrorNotification();
    });
  }

  static verifyLogout() {
    it('Logout user', () => {
      clickLogout();
    });
  }

  static verifyDeliveryAddress(clientAccount) {
    // ADD IT BLOCKS
  }

  
}

export default Login;