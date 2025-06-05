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

const verifyNonMemberNavigationBar = () => {
  cy.checkElemContainsText(selectors.home, 'Home')
  cy.checkElemContainsText(selectors.products, 'Products')
  cy.checkElemContainsText(selectors.cart, 'Cart')
  cy.checkElemContainsText(selectors.signUpLogin, 'Signup / Login');
  cy.checkElemContainsText(selectors.testCases, 'Test Cases');
  cy.checkElemContainsText(selectors.apiTesting, 'API Testing');
  cy.checkElemContainsText(selectors.videoTutorials, 'Video Tutorials');
  cy.checkElemContainsText(selectors.contactUs, 'Contact us');
}

const verifyNewUserSignup = () => {
  cy.clickElemContainsText('.signup-form h2', 'New User Signup!')
}

const verifySignUpLogin = () => {
  cy.clickElemContainsText(selectors.signUpLogin, 'Signup / Login');
}

const verifyProducts = () => {
  cy.clickElemContainsText(selectors.products, 'Products');
}

const clickContactUs = () => {
  cy.clickElemContainsText(selectors.contactUs, 'Contact us');
}

const clickTestCases = () => {
  cy.clickElemContainsText(selectors.testCases, 'Test Cases');
}

const clickCart = () => {
  cy.clickElemContainsText(selectors.cart, 'Cart');
}



class NavigationBar {
   static clickSignUpLogin() {
    it("Click on 'Signup / Login' button", () => {
      verifySignUpLogin();
    });
  }
  
  static clickProducts() {
    it("Click on 'Products' button", () => {
      verifyProducts();
    });
    
    it("Verify user is landed to all products page successfully", () => {
      cy.verifyPageTitle('Automation Exercise - All Products');
    });
  }

  static testNewUserSignup() {
    it("Verify 'New User Signup!' is visible", () => {
      verifyNewUserSignup();
    });
  }

  static verifyCart() {
    it("Click on 'Cart' button", () => {
      clickCart();
    });
  }

  static verifyContactUs() {
    it("Click on 'Contact us' button", () => {
      clickContactUs();
    });
  }

  static verifyTestCases() {
    it("Click on 'Test Cases' button", () => {
      clickTestCases();
    });
    
    it("Verify page title test cases", () => {
      cy.verifyPageTitle('Automation Practice Website for UI Testing - Test Cases');
    });
  }

}

export default NavigationBar;