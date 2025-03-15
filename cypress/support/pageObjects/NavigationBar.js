const selectors = {
  home: 'a[href="/"]',
  products: 'a[href="/products"]',
  cart: '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3)',
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
    cy.checkElemContainsText(selectors.home, 'Home')
    cy.checkElemContainsText(selectors.products, 'Products')
    cy.checkElemContainsText(selectors.cart, 'Cart')
    cy.checkElemContainsText(selectors.signUpLogin, 'Signup / Login');
    cy.checkElemContainsText(selectors.testCases, 'Test Cases');
    cy.checkElemContainsText(selectors.apiTesting, 'API Testing');
    cy.checkElemContainsText(selectors.videoTutorials, 'Video Tutorials');
    cy.checkElemContainsText(selectors.contactUs, 'Contact us');
  }

  static memberNavigationBar() {
    cy.checkElemContainsText(selectors.home, 'Home')
    cy.checkElemContainsText(selectors.products, 'Products')
    cy.checkElemContainsText(selectors.cart, 'Cart')
    cy.checkElemContainsText(selectors.logout, 'Logout');
    cy.checkElemContainsText(selectors.deleteAccount, 'Delete Account');
    cy.checkElemContainsText(selectors.testCases, 'Test Cases');
    cy.checkElemContainsText(selectors.apiTesting, 'API Testing');
    cy.checkElemContainsText(selectors.videoTutorials, 'Video Tutorials');
    cy.checkElemContainsText(selectors.contactUs, 'Contact us');
  }

  static clickHome() {
    cy.clickElemContainsText(selectors.home, 'Home');
  }

  static clickProducts() {
    cy.clickElemContainsText(selectors.products, 'Products');
  }

  static clickCart() {
    cy.clickElemContainsText(selectors.cart, 'Cart');
  }

  static clickSignUpLogin() {
    cy.clickElemContainsText(selectors.signUpLogin, 'Signup / Login');
  }

  static verifyNewUserSignup() {
    cy.clickElemContainsText('.signup-form h2', 'New User Signup!')
  }

  static clickContactUs() {
    cy.clickElemContainsText(selectors.contactUs, 'Contact us');
  }

  static clickTestCases() {
    cy.clickElemContainsText(selectors.testCases, 'Test Cases');
  }

}

export default NavigationBar;