describe('Verify customer accounts in XYZ Bank', () => {

  before(() => {
    // runs once before all tests in the block
    cy.visit('/');
  })
  
  it("Add customer account", () => {
    cy.verifyPageTitle('XYZ Bank');
    cy.get('[ng-click="manager()"]').should('be.visible').click();
    cy.get('[ng-click="addCust()"]').should('have.text', 'Add Customer').click();
    cy.get('[ng-model="fName"]').fill('Test_1');
    cy.get('[ng-model="lName"]').fill('Test_2');
    cy.get('[ng-model="postCd"]').fill('94100');
    cy.get('.btn.btn-default').click();
  });

  it("Open account", () => {
      cy.get('[ng-click="openAccount()"]').should('have.text', 'Open Account').click();
      cy.get('[ng-model="custId"]').select('Hermoine Granger');
      cy.get('[ng-model="currency"]').select('Dollar');
      cy.get('button[type="submit]').click();
  });






















  it('Should register a new user', () => {
    SignUp.testRegisterUser();
  });

  it('Should verify the user is created', () => {
    SignUp.verifyAccountCreated();
  });

  it('Should verify the user is logged in', () => {
    SignUp.verifyAccountLoggedIn();
  });

  it("Click 'Delete Account' button", () => {
    SignUp.verifyAccountDeletion();
  });

  it("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", () => {
    SignUp.verifyAccountDeleted();
  });
  
});