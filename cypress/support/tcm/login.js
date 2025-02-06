import clientAccounts from '../../fixtures/inputs/clients/clientAccounts.json';

var selectors = {
  home: 'a[href="/"]',
  products: 'a[href="/products"]',
  cart: 'a[href="/view_cart"]',
  signUpLogin: 'a[href="/login"]',
  testCases: 'a[href="/test_cases"]',
  apiTesting: 'a[href="/api_list"]',
  videoTutorials: 'a[href="https://www.youtube.com/c/AutomationExercise"]',
  contactUs: 'a[href="/contact_us"]',
  logout: 'a[href="/logout"]',
  deleteAccount: 'a[href="/delete_account"]',
}

export const loginWithAccount = (accountKey) => {
  const account = clientAccounts[accountKey];

  it(`Click on 'Signup / Login' button`, () => {
    cy.get(selectors.signUpLogin)
      .should('be.visible')
      .click();
    cy.title().should('eq', 'Automation Exercise - Signup / Login');
    cy.url().should('include', '/login');
  }); 
  it(`Verify 'Login to your account' is visible`, () => {
    cy.get('.login-form h2')
      .should('have.text', 'Login to your account');
  });
  it('Enter correct email address and password', () => {
    cy.get('[data-qa=login-email]')
      .should('be.visible')
      .type(account.email)
    cy.get('[data-qa=login-password]')
      .should('be.visible')
      .type(account.password)
  });
  it(`Click 'login' button`, () => {
    cy.get('[data-qa=login-button]')
      .should('have.text', 'Login')
      .click()
  });
  it(`Verify that 'Logged in as ${account.firstName} ${account.lastName}' is visible`, () => {
    cy.get('.fa.fa-user')
      .should('be.visible')
      .parent()
      .should('contain.text', `Logged in as ${account.firstName} ${account.lastName}`);
  });
}

export const loginWithRandomAccount = () => {
  const randomEmail = `random${Math.floor(Math.random() * 1000)}@example.com`;
  const randomPassword = `password${Math.floor(Math.random() * 1000)}`;

  it(`Click on 'Signup / Login' button`, () => {
    cy.get(selectors.signUpLogin)
      .should('be.visible')
      .click();
    cy.title().should('eq', 'Automation Exercise - Signup / Login');
    cy.url().should('include', '/login');
  }); 
  it(`Verify 'Login to your account' is visible`, () => {
    cy.get('.login-form h2')
      .should('have.text', 'Login to your account');
  });
  it('Enter incorrect email address and password', () => {
    cy.get('[data-qa=login-email]')
      .should('be.visible')
      .type(randomEmail)
    cy.get('[data-qa=login-password]')
      .should('be.visible')
      .type(randomPassword)
  });
  it(`Click 'login' button`, () => {
    cy.get('[data-qa=login-button]')
      .should('have.text', 'Login')
      .click()
  });
  it(`Verify that error message 'Your email or password is incorrect!' is visible`, () => {
    cy.get('p[style="color: red;"]')
      .should('be.visible')
      .and('contain.text', 'Your email or password is incorrect!');
  });
}