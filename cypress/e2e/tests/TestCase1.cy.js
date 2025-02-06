import { signUp } from "../../support/tcm/signUp";

describe('Test Case 1: Register User', () => {

  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies();
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
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

  signUp();


  // it(`Click 'Delete Account' button`, () => {
  //   cy.get('.fa-trash-o').click()
  // })
  // it(`Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button`, () => {
  //   cy.get('[data-qa="account-deleted"]')
  //     .should('contain', 'Account Deleted!')
  //   cy.get('[data-qa="continue-button"]').click()
  // })
  // nonMemberNavBar()
});