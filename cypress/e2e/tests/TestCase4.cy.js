import NavigationBar from "../../support/pageObjects/NavigationBar";
import Login from "../../support/pageObjects/Login";
import clientAccounts from "../../fixtures/inputs/clients/clientAccounts.json";
import Logout from "../../support/pageObjects/Logout";

describe('Test Case 4: Logout User', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
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

  it("Click on 'Signup / Login' button", () => {
    NavigationBar.clickSignUpLogin();
  });

  it('Login with valid credentials', () => {
    Login.testUsernameField('client4');
    Login.testPasswordField('client4');
    Login.testLoginButton();
  });

  it('Verify that user is logged in', () => {
    Login.testUserLoggedIn('client4');
  });

  it('Logout user', () => {
    Logout.clickLogout();
  });

});