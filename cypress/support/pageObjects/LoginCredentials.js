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

const loginCredentials = () => {
  cy.get(selectors.signUpLogin)
    .should('be.visible')
    .click();
  cy.get('.login-form h2')
      .should('have.text', 'Login to your account');
  cy.title().should('eq', 'Automation Exercise - Signup / Login');
  cy.url().should('include', '/login');
};


class login {
  
}


/*

  it('Enter correct email address and password', () => {
    cy.get('[data-qa=login-email]')
      .should('be.visible')
      .type('TestName@TestName.com')
    cy.get('[data-qa=login-password]')
      .should('be.visible')
      .type('client')
  });
  it(`Click 'login' button`, () => {
    cy.get('[data-qa=login-button]')
      .should('have.text', 'Login')
      .click()
  });
  it(`Verify that 'Logged in as username' is visible`, () => {
    cy.get('.fa.fa-user')
      .should('be.visible')
  })
};
*/