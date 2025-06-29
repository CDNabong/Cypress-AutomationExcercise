describe('Data Driven Login Tests', () => {
  before(() => {
    // runs once before all tests in the block
    // clears the cookies
    cy.clearCookies();
    cy.visit('/login');
    cy.verifyPageTitle('Automation Exercise - Signup / Login');
  });

  it('Log in using all of the data from the JSON file', () => {
    cy.fixture('inputs/clients/dataDrivenTest').then((data) => {
      data.forEach(accountInfo => {
        cy.get('[data-qa="login-email"]').type(accountInfo.email);
        cy.get('[data-qa="login-password"]').type(accountInfo.password);
        cy.get('[data-qa="login-button"]').click();
        if (accountInfo.expectedResult === 'Success'){
          cy.get('.fa.fa-user').parent().contains(`Logged in as ${accountInfo.firstName} ${accountInfo.lastName}`).should('be.visible');
          cy.get('a[href="/logout"]').should('be.visible').click();
        } else {
          cy.get('p').eq(0)
            .should('have.text', 'Your email or password is incorrect!')
            .and('have.css', 'color', 'rgb(255, 0, 0)');
          cy.get('[data-qa="login-email"]').clear();
          cy.get('[data-qa="login-password"]').clear();
        }     
      });
    });

  });

});