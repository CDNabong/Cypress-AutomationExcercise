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
  viewCart: 'a[href="/view_cart"]',
  quantity: 'input[name="quantity"]',
  checkoutButton: 'a.btn.btn-default.check_out',
  registerAndLoginLink: 'a[href="/login"]',
  description: "textarea.form-control",
  placeOrderButton: '.btn-default.check_out'
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
    
    // iterate this as an enhancement to avoid redundant codes
    cy.checkElemContainsText(`#product-${productNumber1} > td.cart_price > p`, productLists.products[`item${productNumber1}`].price);
    cy.checkElemContainsText(`#product-${productNumber1} > td.cart_quantity > button`, '1');
    cy.checkElemContainsText(`#product-${productNumber1} > td.cart_total > p`, productLists.products[`item${productNumber1}`].price);

    cy.checkElemContainsText(`#product-${productNumber2} > td.cart_price > p`, productLists.products[`item${productNumber2}`].price);
    cy.checkElemContainsText(`#product-${productNumber2} > td.cart_quantity > button`, '1');
    cy.checkElemContainsText(`#product-${productNumber2} > td.cart_total > p`, productLists.products[`item${productNumber2}`].price);
  }

  static increaseQuantity(quantity) {
    cy.get(selectors.quantity).clear().type(quantity).should('have.value', quantity);
  }

  static clickAddToCart() {
    cy.clickElemContainsText(selectors.addToCart, 'Add to cart')
  }

  static verifyProductQuantity(productNumber, quantity) {
    cy.checkElemContainsText(`#product-${productNumber} > td.cart_quantity > button`, quantity);
  }

  static clickCheckoutButton() {
    cy.clickElemContainsText(selectors.checkoutButton, 'Proceed To Checkout');
  }

  static clickRegisterLoginLink() {
    cy.clickElemContainsText(selectors.registerAndLoginLink, 'Register / Login');
  }

  static enterDescription(){
    cy.generateRandomText().then((text) => {
      cy.typeElemAndCheckValue(selectors.description, text.randomText, text.randomText);
    });
  }

  static clickPlaceOrder() {
    cy.clickElemContainsText(selectors.placeOrderButton, 'Place Order');
  }

  static verifyProductExists(productNumber) {
    cy.get(`[data-product-id="${productNumber}"]`).should('be.visible');
  }

  static removeProduct(productNumber) {
    cy.get(`[data-product-id="${productNumber}"]`).click();
  }

  static verifyProductRemoved(productNumber) {
    cy.get(`[data-product-id="${productNumber}"]`).should('not.exist');
  }



}

export default Products;