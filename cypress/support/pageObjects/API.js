


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

  static searchProduct() {
    it('API 5: POST To Search Product', function () {
      cy.verifySearchProduct();
    });
  }

  static validLogin(email, password) {
    it('API 7: POST To Verify Login with valid details', function () {
      cy.verifyValidLogin(email, password);
    });
  }

  // static createUser(name, email, password, title, birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number) {
  //   it('API 11: POST To Create/Register User Account', function () {
  //     cy.createRandomUserAPI(name, email, password, title, birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number);
  //   });
  // }

  // static updateUser(email) {
  //   it('API 13: PUT METHOD To Update User Account', function () {
  //     cy.verifyLogin(email);
  //   });
  // }

  static getUserEmail(email) {
    it('API 14: GET user account detail by email', function () {
      cy.verifyUserEmail(email);
    });
  }

  static deleteUser(email, password) {
    it('API 12: DELETE METHOD To Delete User Account', function () {
      cy.deleteUserAccount(email, password);
    });
  }

}