import SignUp from "../../support/pageObjects/SignUp";

describe('Sign Up: Register New User', () => {

  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies();
    cy.visit('/login');
    cy.verifyPageTitle('Automation Exercise - Signup / Login');
  })
  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
    cy.log('Test case finished');
  })

  after(() => {
    // runs once after all tests in the block
    //clears the cookies
    cy.clearCookies()
  })

  it('Should register a new user', () => {
    SignUp.testRegisterUser();
  });
});