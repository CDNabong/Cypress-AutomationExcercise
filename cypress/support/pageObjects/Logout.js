const selectors = {
  logout: 'a[href="/logout"]'
}

class Logout {
  static clickLogout() {
    cy.get(selectors.logout)
      .should('be.visible')
      .contains('Logout')
      .click()
  }

}

export default Logout;