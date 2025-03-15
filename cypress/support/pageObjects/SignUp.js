const selectors = {
  signUpName: '[data-qa=signup-name]',
  signUpEmail: '[data-qa=signup-email]',
  signUpButton: '[data-qa="signup-button"]',
  password: '[data-qa=password]',
  title: "#id_gender1",
  days: '[data-qa="days"]',
  months: '[data-qa="months"]',
  years: '[data-qa="years"]',
  firstName: '[data-qa=first_name]',
  lastName: '[data-qa=last_name]',
  company: '[data-qa="company"]',
  address: '[data-qa="address"]',
  country: '#country',
  state: '[data-qa="state"]',
  city: '[data-qa="city"]',
  zipcode: '[data-qa="zipcode"]',
  mobileNumber: '[data-qa=mobile_number]',
  createAccount: '[data-qa="create-account"]',
  accountCreated: '[data-qa="account-created"]',
  continue: '[data-qa="continue-button"]',
  loggedInAccount: '.fa.fa-user',
  deleteAccount: '.fa.fa-trash-o',
  accountDeleted: '[data-qa="account-deleted"]'
};

class SignUp {

  // Store userData at class level
  static userData = null;

  static testRegisterUser() {
    cy.generateRandomUser().then((userData) => {

      // Explicitly store the data at class level
      SignUp.userData = userData;

    cy.get(selectors.signUpName)
      .should('be.visible')
      .and('have.attr', 'type', 'text')
      .and('have.attr', 'placeholder', 'Name')
      .type(userData.fullName);
    cy.get(selectors.signUpEmail)
      .and('have.attr', 'type', 'email')
      .and('have.attr', 'placeholder', 'Email Address')
      .type(userData.email);
    cy.get(selectors.signUpButton)
      .should('have.text', 'Signup')
      .click();
    cy.get(selectors.password)
      .should('be.visible')
      .type(userData.password);
    cy.get(selectors.title).click();
    cy.get(selectors.days).select('22');
    cy.get(selectors.months).select('11');
    cy.get(selectors.years).select('1999');
    cy.get(selectors.firstName).type(userData.firstName);
    cy.get(selectors.lastName).type(userData.lastName);
    cy.get(selectors.company).type(userData.text);
    cy.get(selectors.address).type(userData.streetAddress);
    cy.get(selectors.country).select('United States');
    cy.get(selectors.state).type(userData.state);
    cy.get(selectors.city).type(userData.city);
    cy.get(selectors.zipcode).type(userData.zipCode);
    cy.get(selectors.mobileNumber).type(userData.mobile);
    cy.get(selectors.createAccount).click();

    });
  }

  static verifyAccountCreated() {
    cy.get(selectors.accountCreated).should('contain', 'Account Created!');
    cy.get(selectors.continue).click();
  }

  static verifyAccountLoggedIn() {
    // Will only proceed when user data is available
    cy.wrap(SignUp.userData).should('not.be.null').then((userData) => {
      cy.get(selectors.loggedInAccount)
        .should('be.visible')
        .parent()
        .contains(`Logged in as ${userData.firstName} ${userData.lastName}`);
    });
  }

  static verifyAccountDeletion() {
    cy.get(selectors.deleteAccount).click();
    cy.get(selectors.loggedInAccount).should('not.exist');
  }

  static verifyAccountDeleted() {
    cy.get(selectors.accountDeleted).should('contain', 'Account Deleted!');
    cy.get(selectors.continue).click();
  }

  static testNameField(name) {
    cy.get(selectors.signUpName)
      .should('be.visible')
      .and('have.attr', 'type', 'text')
      .and('have.attr', 'placeholder', 'Name')
      .type(name);
  }

  static testEmailField(email) {
    cy.get(selectors.signUpEmail)
      .and('have.attr', 'type', 'email')
      .and('have.attr', 'placeholder', 'Email Address')
      .type(email);
    cy.get(selectors.signUpButton).click();
  }

  static testErrorNotification() {
    cy.get('p[style="color: red;"]').should('contain', 'Email Address already exist!');
  }

}

export default SignUp;