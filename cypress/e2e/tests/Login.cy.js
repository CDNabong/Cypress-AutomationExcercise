describe('Verify Login with correct credentials', () => {

  before(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.url().should('include', 'orangehrmlive.com/web/index.php/auth/login');
    cy.title().should('eq', 'OrangeHRM');
  });

  it('Enter Email', () => {
    let username = 'Admin';
    cy.get('[name="username"]').type(username).should('have.value', username);
  })

  it('Enter Password', () => {
    let password = 'admin123';
    cy.get('[name="password"]').type(password).should('have.value', password);
  })

  it('Click Login button', () => {
    cy.get("button[type='submit']").should('be.visible').click();
  })

  it('Click Logout', () => {
    cy.get('.oxd-userdropdown-tab').should('be.visible').click();
    cy.get('.oxd-userdropdown-link').contains('Logout').click();
    cy.title().should('eq', 'OrangeHRM');
  })

});