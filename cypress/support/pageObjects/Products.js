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
  serchProductField: "#search_product",
  searchButton: "#submit_search",
  searchedProductText: "body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > h2",
  viewCart: 'a[href="/view_cart"]'
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

  static clickSearchProduct(productName) {
    cy.get(selectors.serchProductField).type(productName);
    cy.get(selectors.searchButton).click();
  }

  static verifySearchedProduct() {
    cy.checkElemContainsText(selectors.searchedProductText, 'Searched Products');
  }

  static verifySearchedProductResult() {
    cy.get('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > p').should('be.visible').contains('Soft Stretch Jeans');
    cy.get('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div:nth-child(4) > div > div.single-products > div.productinfo.text-center > p').should('be.visible').contains('Regular Fit Straight Jeans');
    cy.get('body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div > div:nth-child(5) > div > div.single-products > div.productinfo.text-center > p').should('be.visible').contains('Grunt Blue Slim Fit Jeans');
  }

  static addToCart(productNumber) {
    cy.clickElemContainsText(`a[data-product-id="${productNumber}"].add-to-cart`, 'Add to cart');
  }

  static viewCart() {
    cy.clickElemContainsText(selectors.viewCart, 'View Cart');
  }

  static verifyCartProducts(productNumber1, productNumber2) {
    cy.checkElemContainsText(`#product-${productNumber1} > td.cart_description > h4 > a`, productLists.products[`item${productNumber1}`].name);
    cy.checkElemContainsText(`#product-${productNumber2} > td.cart_description > h4 > a`, productLists.products[`item${productNumber2}`].name);
  }

  static verifyCartProductsDetails(productNumber1, productNumber2) {
    
    cy.checkElemContainsText(`#product-${productNumber1} > td.cart_price > p`, productLists.products[`item${productNumber1}`].price);
    cy.checkElemContainsText(`#product-${productNumber1} > td.cart_quantity > button`, '1');
    cy.checkElemContainsText(`#product-${productNumber1} > td.cart_total > p`, productLists.products[`item${productNumber1}`].price);

    cy.checkElemContainsText(`#product-${productNumber2} > td.cart_price > p`, productLists.products[`item${productNumber2}`].price);
    cy.checkElemContainsText(`#product-${productNumber2} > td.cart_quantity > button`, '1');
    cy.checkElemContainsText(`#product-${productNumber2} > td.cart_total > p`, productLists.products[`item${productNumber2}`].price);

  }

}

export default Products;