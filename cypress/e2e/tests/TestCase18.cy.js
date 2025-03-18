import Products from '../../support/pageObjects/Products';

describe('Test Case 18: View Category Products', () => {
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
    cy.visit('/');
    cy.verifyPageTitle('Automation Exercise');
  })

  it('Verify that categories are visible on left side bar', () => {
    Products.verifyCategories();
  });

  it("Click on 'Women' category", () => {
    Products.clickCategory('Women');
  });

  it("Click on any category link under 'Women' category", () => {
    Products.clickSubCategory('Dress');
  });

  it("Click on 'Women' category", () => {
    Products.clickCategory('Women');
  });

  it("Click on any category link under 'Women' category", () => {
    Products.clickSubCategory('Tops');
  });

  it("Click on 'Women' category", () => {
    Products.clickCategory('Women');
  });

  it("Click on any category link under 'Women' category", () => {
    Products.clickSubCategory('Saree');
  });

  it("Click on 'Men' category", () => {
    Products.clickCategory('Men');
  });

  it("Click on any category link under 'Men' category", () => {
    Products.clickSubCategory('Tshirts');
  });

  it("Click on 'Men' category", () => {
    Products.clickCategory('Men');
  });

  it("Click on any category link under 'Men' category", () => {
    Products.clickSubCategory('Jeans');
  });

  it("Click on 'Kids' category", () => {
    Products.clickCategory('Kids');
  });

  it("Click on any category link under 'Kids' category", () => {
    Products.clickSubCategory('KidsDress');
  });

  it("Click on 'Kids' category", () => {
    Products.clickCategory('Kids');
  });

  it("Click on any category link under 'Kids' category", () => {
    Products.clickSubCategory('KidsTops');
  });

});