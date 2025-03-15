


export default class API {

  static productsList() {
    it('API 1: Get All Products List', function () {
      cy.verifyProductsList();
    });
  }

  static brandsList() {
    it('API 3: Get All Brands List', function () {
      cy.verifyBrandsList();
    });
  }

  static searchProduct(product) {
    it('API 5: POST To Search Product', function () {
      cy.verifySearchProduct(product);
    });
  }

  static validLogin(email, password) {
    it('API 7: POST To Verify Login with valid details', function () {
      cy.verifyValidLogin(email, password);
    });
  }

  static getUserEmail(email) {
    it('API 14: GET user account detail by email', function () {
      cy.verifyUserEmail(email);
    });
  }

}