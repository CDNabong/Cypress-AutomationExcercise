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

  /** 
   * Create a simple program that will transfer 2 variables from one another without using a third variable
   * let a = 5, b = 10;
   * console.log(`Before swap: a = ${a}, b = ${b}`);
   * console.log(`After swap: a = ${b}, b = ${a}`);
   * 
  */

});