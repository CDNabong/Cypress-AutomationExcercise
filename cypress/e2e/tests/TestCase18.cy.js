import CommonHooks from '../../support/pageObjects/commonHooks';
import Products from '../../support/pageObjects/Products';

describe('Test Case 18: View Category Products', () => {
  before(() => {
    // runs once before all tests in the block
    //clears the cookies
    cy.clearCookies()
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })
  CommonHooks.CommonBeforeEachAfterEachHooks

  it('Verify that categories are visible on left side bar', () => {
    Products.verifyCategories();
  });

  it(`Click Women`, () => {
    Products.verifyClickedCategory('Women');
  });

  it(`Click Dress`, () => {
    Products.verifySubCategory('Dress');
  });

  it(`Click Women`, () => {
    Products.verifyClickedCategory('Women');
  });

  it(`Click Tops`, () => {
    Products.verifySubCategory('Tops');
  });

  it(`Click Women`, () => {
    Products.verifyClickedCategory('Women');
  });

  it(`Click Saree`, () => {
    Products.verifySubCategory('Saree');
  });

  it(`Click Men`, () => {
    Products.verifyClickedCategory('Men');
  });

  it(`Click Tshirts`, () => {
    Products.verifySubCategory('Tshirts');
  });

  it(`Click Men`, () => {
    Products.verifyClickedCategory('Men');
  });

  it(`Click Jeans`, () => {
    Products.verifySubCategory('Jeans');
  });

  it(`Click Kids`, () => {
    Products.verifyClickedCategory('Kids');
  });

  it(`Click KidsDress`, () => {
    Products.verifySubCategory('KidsDress');
  });

  it(`Click Kids`, () => {
    Products.verifyClickedCategory('Kids');
  });

  it(`Click KidsTops`, () => {
    Products.verifySubCategory('KidsTops');
  });


});