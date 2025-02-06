describe('Test Case 5: Register User with existing email', () => {
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
  it(`Verify 'New User Signup!' is visible`, () => {
    cy.get('.signup-form h2')
      .should('have.text', 'New User Signup!');
  });
  it('Enter name and already registered email address', () => {
    cy.get('[data-qa=signup-name]')
      .should('be.visible')
      .type('TestName')
    cy.get('[data-qa=signup-email]')
      .should('be.visible')
      .type('TestName@TestName.com')
  });
  it(`Click 'Signup' button`, () => {
    cy.get('[data-qa=signup-button]')
      .should('have.text', 'Signup')
      .click()
  });
  it(`Verify error 'Email Address already exist!' is visible`, () => {
    cy.get('p[style="color: red;"]')
      .should('be.visible')
      .and('contain', 'Email Address already exist!');
  });


  

});