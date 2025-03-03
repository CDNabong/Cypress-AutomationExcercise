const selectors = {
  loginUsername: '[data-qa=login-email]',
  loginPassword: '[data-qa=login-password]',
  loginButton: '[data-qa=login-button]',
  loggedInAccount: '.fa.fa-user',
}

class Login {

  static testUsernameField(Username) {
    cy.get(selectors.loginUsername)
      .should('be.visible')
      .and('have.attr', 'type', 'email')
      .and('have.attr', 'placeholder', 'Email Address')
      .type(Username);
  }

  static testPasswordField(Password) {
    cy.get(selectors.loginPassword)
      .should('be.visible')
      .and('have.attr', 'type', 'password')
      .and('have.attr', 'placeholder', 'Password')
      .type(Password);
  }

  static testLoginButton() {
    cy.get(selectors.loginButton)
      .should('have.text', 'Login')
      .click();
  }

  static testUserLoggedIn(FirstName, LastName) {
    cy.get(selectors.loggedInAccount)
      .should('be.visible')
      .parent()
      .contains(`Logged in as ${FirstName} ${LastName}`);
  }

  static testErrorNotification() {
    cy.get('p').eq(0)
    .should('have.text', 'Your email or password is incorrect!')
    .and('have.css', 'color', 'rgb(255, 0, 0)');
  }

  
}

export default Login;