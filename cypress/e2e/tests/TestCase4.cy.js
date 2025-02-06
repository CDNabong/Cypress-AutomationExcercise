describe('Test Case 4: Logout User', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.title().should('eq', 'Automation Exercise');
  })
  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
  })

  after(() => {
    // runs once after all tests in the block
    //clears the cookies
    cy.clearCookies()
  })
  it(`Click on 'Signup / Login' button`, () => {
    cy.get('.fa-lock')
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
    cy.get('.fa-user')
      .should('be.visible')
  })
  it(`Click 'Logout' button`, () => {
    cy.get('.fa-lock')
      .should('be.visible')
      .click()
  })
  it(`Verify that user is navigated to login page`, () => {
    cy.title().should('eq', 'Automation Exercise - Signup / Login');
    cy.url().should('include', '/login');
  })



  

});