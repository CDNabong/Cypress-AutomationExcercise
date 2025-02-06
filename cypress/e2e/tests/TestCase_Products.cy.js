import { Products } from '../../support/pageObjects/navigationBar/Products';

describe('Test Case Products', () => {
  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies()

    cy.visit('/products');
    cy.title().should('eq', 'Automation Exercise - All Products');
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
  Products.products();
});