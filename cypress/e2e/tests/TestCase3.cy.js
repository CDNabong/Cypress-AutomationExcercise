import { clickSignupLogin } from "../../support/navigationBar";

describe('Test Case 3: Login User with incorrect email and password', () => {

  let randomData;

  before(() => {
    // runs once before all tests in the block
    
    //clears the cookies
    cy.clearCookies();
    cy.generateRandomUser().then((data) => {
      randomData = data;
      cy.visit('/');
      cy.verifyPageTitle('Automation Exercise');
    });
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
  clickSignupLogin()
  it(`Verify 'Login to your account' is visible`, () => {
    cy.get('.login-form h2')
      .should('have.text', 'Login to your account');
  });
  it('Enter incorrect email address and password', () => {
    cy.get('[data-qa=login-email]').type(randomData.email);
    cy.get('[data-qa=login-password]').type(randomData.password);
  });
  it(`Click 'login' button`, () => {
    cy.get('[data-qa=login-button]')
      .should('have.text', 'Login')
      .click()
  });
  it(`Verify error 'Your email or password is incorrect!' is visible`, () => {
    cy.get('p[style="color: red;"]')
      .should('be.visible')
      .and('contain', 'Your email or password is incorrect!');
  })
  

});