import NavigationBar from '../../support/pageObjects/NavigationBar';
import Products from '../../support/pageObjects/Products';

describe('Test Case 19: View & Cart Brand Products', () => {
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

  it("Click on 'Products' button", () => {
    NavigationBar.clickProducts();
  });

  it("Verify that Brands are visible on left side bar", () => {
    Products.verifyBrands();
  });

  it("Click on any brand name - Polo", () => {
    Products.clickBrand('Polo');
  });

  it("Click on any brand name - H&M", () => {
    Products.clickBrand('H&M');
  });

  it("Click on any brand name - Madame", () => {
    Products.clickBrand('Madame');
  });

  it("Click on any brand name - Mast & Harbour", () => {
    Products.clickBrand('Mast & Harbour');
  });

  it("Click on any brand name - Babyhug", () => {
    Products.clickBrand('Babyhug');
  });

  it("Click on any brand name - Allen Solly Junior", () => {
    Products.clickBrand('Allen Solly Junior');
  });

  it("Click on any brand name - Kookie Kids", () => {
    Products.clickBrand('Kookie Kids');
  });

  it("Click on any brand name - Biba", () => {
    Products.clickBrand('Biba');
  });

});