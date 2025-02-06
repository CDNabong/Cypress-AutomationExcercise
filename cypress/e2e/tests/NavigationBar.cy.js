import NavigationBar from "../../support/pageObjects/client/navigationBar.js";
import { loginWithAccount } from "../../support/tcm/login.js"

describe('Verify Navigation Bar for Member', () => {
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
  it('Navigation bar is not a member', () => {
    NavigationBar.verifyNoneMemberNavigationBar();
  });

  loginWithAccount('client4');

  it('Logged in navigation bar', () => {
    NavigationBar.verifyMemberNavigationBar();
  });
  
});