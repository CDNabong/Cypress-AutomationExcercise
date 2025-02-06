export const logout = () => {
  it(`Click 'Logout' button`, () => {
    cy.get('.fa-lock')
      .should('be.visible')
      .click()
  })
  it(`Verify that user is navigated to login page`, () => {
    cy.title().should('eq', 'Automation Exercise - Signup / Login');
    cy.url().should('include', '/login');
  })
}
