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
  accountDeleted: '[data-qa="account-deleted"]',
  errorNotification: 'p[style="color: red;"]'
};

const verifySignUp = () => {
  cy.generateRandomUser().then((userData) => {

    // Explicitly store the data at class level
    SignUp.userData = userData;

    cy.typeElemAndCheckValue(selectors.signUpName, userData.fullName, userData.fullName);
    cy.typeElemAndCheckValue(selectors.signUpEmail, userData.email, userData.email);
    cy.clickElemContainsText(selectors.signUpButton, 'Signup')
    cy.typeElemAndCheckValue(selectors.password, userData.password, userData.password);
    // cy.selectElemContainsText(selectors.title, 'Mr.');
    cy.selectElemContainsText(selectors.days, '22');
    cy.selectElemContainsText(selectors.months, '11');
    cy.selectElemContainsText(selectors.years, '1999');
    cy.typeElemAndCheckValue(selectors.firstName, userData.firstName, userData.firstName);
    cy.typeElemAndCheckValue(selectors.lastName, userData.lastName, userData.lastName);
    cy.typeElemAndCheckValue(selectors.company, userData.text, userData.text);
    cy.typeElemAndCheckValue(selectors.address, userData.streetAddress, userData.streetAddress);
    cy.selectElemContainsText(selectors.country, 'United States');
    cy.typeElemAndCheckValue(selectors.state, userData.state, userData.state);
    cy.typeElemAndCheckValue(selectors.city, userData.city, userData.city);
    cy.typeElemAndCheckValue(selectors.zipcode, userData.zipCode, userData.zipCode);
    cy.typeElemAndCheckValue(selectors.mobileNumber, userData.mobile, userData.mobile);
    cy.clickVisibleElement(selectors.createAccount);
  });
}

const testAccountCreated = () => {
  cy.checkElemContainsText(selectors.accountCreated, 'Account Created!');
  cy.clickVisibleElement(selectors.continue);
}

const accountLoggedIn = () => {
  cy.wrap(SignUp.userData).should('not.be.null').then((userData) => {
      cy.get(selectors.loggedInAccount).should('be.visible').parent().contains(`Logged in as ${userData.firstName} ${userData.lastName}`);
  });
}

const accountDeletion = () => {
  cy.clickVisibleElement(selectors.deleteAccount);
  cy.get(selectors.loggedInAccount).should('not.exist');
}

const accountDeleted = () => {
  cy.checkElemContainsText(selectors.accountDeleted, 'Account Deleted!');
  cy.clickVisibleElement(selectors.continue);
}

const testNameField = (name) => {
  cy.typeElemAndCheckValue(selectors.signUpName, name, name);
}

const testEmailField = (email) => {
  cy.typeElemAndCheckValue(selectors.signUpEmail, email, email);
  cy.clickElemContainsText(selectors.signUpButton, 'Signup');
}

const testErrorNotification = () => {
  cy.checkElemContainsText(selectors.errorNotification, 'Email Address already exist!');
}

class SignUp {

  // Store userData at class level
  static userData = null;

  static testRegisterUser() {
    it('Should register a new user', () => {
      verifySignUp();
    });
  }

  static verifyAccountCreated() {
    it('Should verify the user is created', () => {
      testAccountCreated();
    });
  }

  static verifyAccountLoggedIn() {
    it('Should verify the user is logged in', () => {
      accountLoggedIn();
    });    
  }

  static verifyAccountDeletion() {
    it("Click 'Delete Account' button", () => {
      accountDeletion();
    });
  }

  static verifyAccountDeleted() {
    it("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", () => {
      accountDeleted();
    });
  }

  static verifySignUpInvalidCredentials(name, email) {
    it('Signup with invalid credentials', () => {
      testNameField(name);
      testEmailField(email);
    });
  }

  static verifySignUpErrorNotification() {
    it('Verify error notification', () => {
      testErrorNotification();
    });
  }

}

export default SignUp;