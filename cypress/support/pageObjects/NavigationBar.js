const selectors = {
  home: 'a[href="/"]',
  products: 'a[href="/products"]',
  cart: 'a[href="/view_cart"]',
  signUpLogin: 'a[href="/login"]',
  testCases: 'a[href="/test_cases"]',
  apiTesting: 'a[href="/api_list"]',
  videoTutorials: 'a[href="https://www.youtube.com/c/AutomationExercise"]',
  contactUs: 'a[href="/contact_us"]',
  logout: 'a[href="/logout"]',
  deleteAccount: 'a[href="/delete_account"]'
}

class NavigationBar {

  static nonMemberNavigationBar() {
    cy.get(selectors.home)
      .should('be.visible')
      .should('contain', 'Home')
    cy.get(selectors.products)
      .should('be.visible')
      .should('contain', 'Products')
    cy.get(selectors.cart)
      .should('be.visible')
      .should('contain', 'Cart')
    cy.get(selectors.signUpLogin)
      .should('be.visible')
      .should('contain', 'Signup / Login')
    cy.get(selectors.testCases)
      .should('be.visible')
      .should('contain', 'Test Cases')
    cy.get(selectors.apiTesting)
      .should('be.visible')
      .should('contain', 'API Testing')
    cy.get(selectors.videoTutorials)
      .should('be.visible')
      .should('contain', 'Video Tutorials')
    cy.get(selectors.contactUs)
      .should('be.visible')
      .should('contain', 'Contact us')
  }

  static memberNavigationBar() {
    cy.get(selectors.home)
      .should('be.visible')
      .should('contain', 'Home')
    cy.get(selectors.products)
      .should('be.visible')
      .should('contain', 'Products')
    cy.get(selectors.cart)
      .should('be.visible')
      .should('contain', 'Cart')
    cy.get(selectors.signUpLogin)
      .should('not.exist')
    cy.get(selectors.logout)
      .should('be.visible')
      .should('contain', 'Logout')
    cy.get(selectors.deleteAccount)
      .should('be.visible')
      .should('contain', 'Delete Account')
    cy.get(selectors.testCases)
      .should('be.visible')
      .should('contain', 'Test Cases')
    cy.get(selectors.apiTesting)
      .should('be.visible')
      .should('contain', 'API Testing')
    cy.get(selectors.videoTutorials)
      .should('be.visible')
      .should('contain', 'Video Tutorials')
    cy.get(selectors.contactUs)
      .should('be.visible')
      .should('contain', 'Contact us')
  }

}

export default NavigationBar;