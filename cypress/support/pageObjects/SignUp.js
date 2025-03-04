const selectors = {
  signUpName: '[data-qa=signup-name]',
  signUpEmail: '[data-qa=signup-email]',
  signUpButton: '[data-qa="signup-button"]',
  password: '[data-qa=password]',
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
};

class SignUp {

  static testRegisterUser() {

    cy.generateRandomUser().then((userData) => {
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
    cy.get(selectors.accountCreated).should('contain', 'Account Created!');
    cy.get(selectors.continue).click();
    cy.get(selectors.loggedInAccount)
    .should('be.visible')
    .parent()
    .contains(`Logged in as ${userData.firstName} ${userData.lastName}`);
    });

  }

}

export default SignUp;