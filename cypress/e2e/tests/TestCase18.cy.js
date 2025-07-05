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

  // TODO: test case 18-26

  Products.verifyCategories();
  Products.verifyClickedCategory('Women');
  Products.verifySubCategory('Dress');
  Products.verifyClickedCategory('Women');
  Products.verifySubCategory('Tops');
  Products.verifyClickedCategory('Women');
  Products.verifySubCategory('Saree');
  Products.verifyClickedCategory('Men');
  Products.verifySubCategory('Tshirts');
  Products.verifyClickedCategory('Men');
  Products.verifySubCategory('Jeans');
  Products.verifyClickedCategory('Kids');
  Products.verifySubCategory('KidsDress');
  Products.verifyClickedCategory('Kids');
  Products.verifySubCategory('KidsTops');

});