import productLists from '../../fixtures/productList/productLists.json';

const selectors = {
  addToCart: "button.btn.btn-default.cart",
  continueShopping: "[data-dismiss='modal']",
  cartModal: ".modal-content",
  productName: ".product-information h2",
  productCategory: ".product-information p:nth-of-type(1)",
  productAvailability: ".product-information p:nth-of-type(2)",
  productCondition: ".product-information p:nth-of-type(3)",
  productBrand: ".product-information p:nth-of-type(4)",
  productPrice: "span span:first-of-type",
};





class Products {

  static viewProductNumber(productNumber) {
    cy.clickElemContainsText(`a[href='/product_details/${productNumber}']`, 'View Product');
  }

  static verifyProductDetails(itemNumber) {
    cy.checkElemContainsText(selectors.productName, productLists.products[`item${itemNumber}`].name);
    cy.checkElemContainsText(selectors.productCategory, productLists.products[`item${itemNumber}`].category);
    cy.checkElemContainsText(selectors.productAvailability, productLists.products[`item${itemNumber}`].availability);
    cy.checkElemContainsText(selectors.productCondition, productLists.products[`item${itemNumber}`].condition);
    cy.checkElemContainsText(selectors.productBrand, productLists.products[`item${itemNumber}`].brand);
    cy.checkElemContainsText(selectors.productPrice, productLists.products[`item${itemNumber}`].price);
  }

  static clickContinueShopping() {
    cy.clickElemContainsText(selectors.continueShopping, 'Continue Shopping');
  }

}

export default Products;