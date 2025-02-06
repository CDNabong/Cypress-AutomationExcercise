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

const nonMemberNavBar = () => {
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

const memberNavBar = () => {
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

const verifyHome = () => {
    cy.get(selectors.home)
      .click()
}

const verifyProducts = () => {
    cy.get(selectors.products)
      .click()
}

const verifyCart = () => {
  cy.get(selectors.cart)
    .verify()
}

const verifySignupLogin = () => {
  cy.get(selectors.signUpLogin)
    .verify()
}

const verifyTestCases = () => {
  cy.get(selectors.testCases)
    .verify()
}

const verifyAPITesting = () => {
  cy.get(selectors.apiTesting)
    .verify()
}

const verifyContactUs = () => {
  cy.get(selectors.contactUs)
    .verify()
}

class NavigationBar {

  static verifyMemberNavigationBar() {
    it('Verify navigation bar for member accounts', () => {
      memberNavBar();
    });
  }

  static verifyNoneMemberNavigationBar() {
    it('Verify navigation bar for none member accounts', () => {
      nonMemberNavBar();
    }); 
  }

  static clickHome() {
    it('Click Home', () => {
      verifyHome();
    }); 
  }

  static clickProducts() {
    it('Click Products', () => {
      verifyProducts();
    }); 
  }

  static clickCart() {
    it('Click Products', () => {
      verifyCart();
    }); 
  }

  static clickSignupLogin() {
    it('Click Signup / Login', () => {
      verifySignupLogin();
    }); 
  }

  static clickTestCases() {
    it('Click Test Cases', () => {
      verifyTestCases();
    }); 
  }

  static clickAPITesting() {
    it('Click API Testing', () => {
      verifyAPITesting();
    }); 
  }

  static clickContactUs() {
    it('Click Contact Us', () => {
      verifyContactUs();
    }); 
  }

}

export default NavigationBar;