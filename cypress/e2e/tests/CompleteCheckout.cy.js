import { loginWithAccount } from "../../support/tcm/login.js"
import { menAddtoCartAllProducts } from '../../support/tcm/products.js';
import { logout } from "../../support/tcm/logout.js"
import Checkout from "../../support/pageObjects/Checkout.js";


describe('Complete checkout process', () => {
  before(() => {
    // Setup code before tests run

    //clears the cookies
    cy.clearCookies();
    cy.visit('/products');
    cy.verifyPageTitle('Automation Exercise - All Products');
  });

  beforeEach(() => {
    // Code to run before each test
  });

  afterEach(() => {
    // Code to run after each test
  });

  after(() => {
    // Cleanup code after all tests run
  });

  loginWithAccount('client4');
  menAddtoCartAllProducts();
  it('Verify checkout Process', () => {
    Checkout.verifyCheckoutProcess();
  });
  logout();

});