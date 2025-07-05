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
  viewCart: 'a[href="/view_cart"]',
  quantity: 'input[name="quantity"]',
  checkoutButton: 'a.btn.btn-default.check_out',
  registerAndLoginLink: 'a[href="/login"]',
  description: "textarea.form-control",
  placeOrderButton: '.btn-default.check_out',
  headerSubcategory: 'body > section > div > div.row > div.col-sm-9.padding-right > div > h2',
  brandCategories: 'body > section:nth-child(4) > div > div > div.col-sm-3 > div.left-sidebar > div.brands_products > h2',
  writeReview: 'body > section > div > div > div.col-sm-9.padding-right > div.category-tab.shop-details-tab > div.col-sm-12 > ul > li > a',
  reviewName: '#name',
  reviewEmail: '#email',
  reviewMessage: '#review',
  reviewSubmitBtn: '#button-review',
  reviewSuccessNotif: '#review-section',
  recommendedItems: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.recommended_items > h2',
  recommendedItem1: '#recommended-item-carousel > div > div.item.active > div:nth-child(1) > div > div > div > a',
  recommendedItem2: '#recommended-item-carousel > div > div.item.active > div:nth-child(2) > div > div > div > a',
  recommendedItem3: '#recommended-item-carousel > div > div.item.active > div:nth-child(3) > div > div > div > a',
  recommendedItem4: '#recommended-item-carousel > div > div.item.active > div:nth-child(4) > div > div > div > a',
  recommendedItem5: '#recommended-item-carousel > div > div.item.active > div:nth-child(5) > div > div > div > a',
  recommendedItem6: '#recommended-item-carousel > div > div.item.active > div:nth-child(6) > div > div > div > a',
};

const categorySelectors = {
  women: '#accordian > div:nth-child(1) > div.panel-heading > h4 > a',
  dress: '#Women > div > ul > li:nth-child(1) > a',
  tops: '#Women > div > ul > li:nth-child(2) > a',
  saree: '#Women > div > ul > li:nth-child(3) > a',
  men: '#accordian > div:nth-child(2) > div.panel-heading > h4 > a',
  tShirts: '#Men > div > ul > li:nth-child(1) > a',
  jeans: '#Men > div > ul > li:nth-child(2) > a',
  kids: '#accordian > div:nth-child(3) > div.panel-heading > h4 > a',
  kidsDress: '#Kids > div > ul > li:nth-child(1) > a',
  kidsTops: '#Kids > div > ul > li:nth-child(2) > a',
};

const brandSelectors = {
  polo: 'a[href="/brand_products/Polo"]',
  hm: 'a[href="/brand_products/H&M"]',
  madame: 'a[href="/brand_products/Madame"]',
  mastHarbour: 'a[href="/brand_products/Mast & Harbour"]',
  babyHug: 'a[href="/brand_products/Babyhug"]',
  allenSollyJunior: 'a[href="/brand_products/Allen Solly Junior"]',
  kookieKids: 'a[href="/brand_products/Kookie Kids"]',
  biba: 'a[href="/brand_products/Biba"]',
}

const viewProductNumber = (productNumber) => {
  cy.clickElemContainsText(`a[href='/product_details/${productNumber}']`, 'View Product');
}

const verifyProductDetails = (itemNumber) => {
  cy.checkElemContainsText(selectors.productName, productLists.products[`item${itemNumber}`].name);
  cy.checkElemContainsText(selectors.productCategory, productLists.products[`item${itemNumber}`].category);
  cy.checkElemContainsText(selectors.productAvailability, productLists.products[`item${itemNumber}`].availability);
  cy.checkElemContainsText(selectors.productCondition, productLists.products[`item${itemNumber}`].condition);
  cy.checkElemContainsText(selectors.productBrand, productLists.products[`item${itemNumber}`].brand);
  cy.checkElemContainsText(selectors.productPrice, productLists.products[`item${itemNumber}`].price);
}

const clickSearchProduct = (productName) => {
  cy.get(selectors.serchProductField).type(productName);
  cy.get(selectors.searchButton).click();
}

const verifySearchedProductResult = (...productNumbers) => {
  productNumbers.forEach(productNumber => {
    cy.checkElemContainsText(`a[href='/product_details/${productNumber}']`, 'View Product');
  });
}

const addToCart = (...productNumbers) => {
  productNumbers.forEach(productNumber => {
      cy.clickElemContainsText(`a[data-product-id="${productNumber}"].add-to-cart`, 'Add to cart');
      cy.clickElemContainsText(selectors.continueShopping, 'Continue Shopping');
    });
}

const cartProducts = (...productNumbers) => {
  productNumbers.forEach(productNumber => {
      cy.checkElemContainsText(`#product-${productNumber} > td.cart_description > h4 > a`, productLists.products[`item${productNumber}`].name);
    });
}

const cartProductsDetails = (...productNumbers) => {
  productNumbers.forEach(productNumber => {
      cy.checkElemContainsText(`#product-${productNumber} > td.cart_price > p`, productLists.products[`item${productNumber}`].price);
      cy.checkElemContainsText(`#product-${productNumber} > td.cart_quantity > button`, '1');
      cy.checkElemContainsText(`#product-${productNumber} > td.cart_total > p`, productLists.products[`item${productNumber}`].price);
    });
}

const increaseQuantity = (quantity) => {
  cy.get(selectors.quantity).clear().type(quantity).should('have.value', quantity);
}

const clickAddToCart = () => {
  cy.clickElemContainsText(selectors.addToCart, 'Add to cart')
}

const clickViewCart = () => {
  cy.clickElemContainsText(selectors.viewCart, 'View Cart');
}

const productQuantity = (productNumber, quantity) => {
  cy.checkElemContainsText(`#product-${productNumber} > td.cart_quantity > button`, quantity);
}

const clickCheckoutButton = () => {
  cy.clickElemContainsText(selectors.checkoutButton, 'Proceed To Checkout');
}

  const clickRegisterLoginLink = () => {
    cy.clickElemContainsText(selectors.registerAndLoginLink, 'Register / Login');
  }

  const enterDescription = () => {
    cy.generateRandomText().then((text) => {
      cy.typeElemAndCheckValue(selectors.description, text.randomText, text.randomText);
    });
  }

  const clickPlaceOrder = () => {
    cy.clickElemContainsText(selectors.placeOrderButton, 'Place Order');
  }


  const productExists = (productNumber) => {
    cy.get(`[data-product-id="${productNumber}"]`).should('be.visible');
  }

  const removeProduct = (...productNumber) => {
    productNumber.forEach(productNumber => {
      cy.get(`[data-product-id="${productNumber}"]`).click();
    });
  }

  const productRemoved = (...productNumber) => {
    productNumber.forEach(productNumber => {
      cy.get(`[data-product-id="${productNumber}"]`).should('not.exist');
    });
  }

  const genderCategories = () => {
    cy.checkElemContainsText(categorySelectors.women, 'Women');
    cy.checkElemContainsText(categorySelectors.men, 'Men');
    cy.checkElemContainsText(categorySelectors.kids, 'Kids');
  }

  const clickCategory = (gender) => {
    if (gender) {
      switch (gender) {
        case 'Women':
          cy.clickElemContainsText(categorySelectors.women, 'Women');
          break;
        case 'Men':
          cy.clickElemContainsText(categorySelectors.men, 'Men');
          break;
        case 'Kids':
          cy.clickElemContainsText(categorySelectors.kids, 'Kids');
          break;
      }
    }
  }

  const clickSubCategory = (subCategory) => {
    if (subCategory) {
      switch (subCategory) {
        case 'Dress':
          cy.clickElemContainsText(categorySelectors.dress, subCategory);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Women - Dress Products');
          break;
        case 'Tops':
          cy.clickElemContainsText(categorySelectors.tops, subCategory);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Women - Tops Products');
          break;
        case 'Saree':
          cy.clickElemContainsText(categorySelectors.saree, subCategory);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Women - Saree Products');
          break;
        case 'Tshirts':
          cy.clickElemContainsText(categorySelectors.tShirts, subCategory);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Men - Tshirts Products');
          break;
        case 'Jeans':
          cy.clickElemContainsText(categorySelectors.jeans, subCategory);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Men - Jeans Products');
          break;
        case 'KidsDress':
          cy.clickElemContainsText(categorySelectors.kidsDress, 'Dress');
          cy.checkElemContainsText(selectors.headerSubcategory, 'Kids - Dress Products');
          break;
        case 'KidsTops':
          cy.clickElemContainsText(categorySelectors.kidsTops, 'Tops & Shirts');
          cy.checkElemContainsText(selectors.headerSubcategory, 'Kids - Tops & Shirts Products');
          break;
      }
    } 
  }

  const verifyBrands = () => {
    cy.scrollTo('center')
    cy.checkElemContainsText(brandSelectors.polo, 'Polo');
    cy.checkElemContainsText(brandSelectors.hm, 'H&M');
    cy.checkElemContainsText(brandSelectors.madame, 'Madame');
    cy.checkElemContainsText(brandSelectors.mastHarbour, 'Mast & Harbour');
    cy.checkElemContainsText(brandSelectors.babyHug, 'Babyhug');
    cy.checkElemContainsText(brandSelectors.allenSollyJunior, 'Allen Solly Junior');
    cy.checkElemContainsText(brandSelectors.kookieKids, 'Kookie Kids');
    cy.checkElemContainsText(brandSelectors.biba, 'Biba');
  }

  const clickBrands = (brand) => {
  if (brand) {
      switch (brand) {
        case 'Polo':
          cy.clickElemContainsText(brandSelectors.polo, brand);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Brand - Polo Products');
          break;
        case 'H&M':
          cy.clickElemContainsText(brandSelectors.hm, brand);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Brand - H&M Products');
          break;
        case 'Madame':
          cy.clickElemContainsText(brandSelectors.madame, brand);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Brand - Madame Products');
          break;
        case 'Mast & Harbour':
          cy.clickElemContainsText(brandSelectors.mastHarbour, brand);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Brand - Mast & Harbour Products');
          break;
        case 'Babyhug':
          cy.clickElemContainsText(brandSelectors.babyHug, brand);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Brand - Babyhug Products');
          break;
        case 'Allen Solly Junior':
          cy.clickElemContainsText(brandSelectors.allenSollyJunior, brand);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Brand - Allen Solly Junior Products');
          break;
        case 'Kookie Kids':
          cy.clickElemContainsText(brandSelectors.kookieKids, brand);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Brand - Kookie Kids Products');
          break;
        case 'Biba':
          cy.clickElemContainsText(brandSelectors.biba, brand);
          cy.checkElemContainsText(selectors.headerSubcategory, 'Brand - Biba Products');
          break;
      }
    }
  }

  const writeReviewIndicator = () => {
    cy.checkElemContainsText(selectors.writeReview, 'Write Your Review')
  }

  const enterProductReview = () => {
    cy.generateRandomUser().then((userData) => {
      cy.typeElemAndCheckValue(selectors.reviewName, userData.fullName, userData.fullName);
      cy.typeElemAndCheckValue(selectors.reviewEmail, userData.email, userData.email);
    });
    cy.generateRandomText().then((text) => {
      cy.typeElemAndCheckValue(selectors.reviewMessage, text.randomText, text.randomText);
    });
    cy.clickElemContainsText(selectors.reviewSubmitBtn, 'Submit')
  }

  const reviewSuccessNotification = () => {
    cy.checkElemContainsText(selectors.reviewSuccessNotif, 'Thank you for your review.')
  }

  const addToCartRecommendedItems = () => {
    cy.clickElemContainsText(selectors.recommendedItem1, 'Add to cart');
    cy.clickElemContainsText(selectors.continueShopping, 'Continue Shopping');
    cy.clickElemContainsText(selectors.recommendedItem2, 'Add to cart');
    cy.clickElemContainsText(selectors.continueShopping, 'Continue Shopping');
  }

  const recommendedItemsHeader = () => {
    cy.checkElemContainsText(selectors.recommendedItems, 'recommended items');
  }

class Products {

  static productNumber(productNumber) {
    viewProductNumber(productNumber);
  }

  static productDetails(itemNumber) {
    verifyProductDetails(itemNumber);
  }

  static clickContinueShopping() {
    cy.clickElemContainsText(selectors.continueShopping, 'Continue Shopping');
  }

  static searchProduct(productName) {
    clickSearchProduct(productName);
  }

  static searchedProductResult(...productNumbers) {
    verifySearchedProductResult(...productNumbers);
  }

  static verifyAddToCart(...productNumbers) {
    it("Add product and click 'Add to cart'", () => {
      addToCart(...productNumbers);
    });
  }

  static viewCart() {
    it("Click 'View Cart' button", () => {
      clickViewCart();
    });
  }

  static verifyCartProducts(...productNumbers) {
    it("Verify both products are added to Cart", () => {
      cartProducts(...productNumbers);
    });
  }

  static verifyCartProductsDetails(...productNumbers) {
    it("Verify their prices, quantity and total price", () => {
      cartProductsDetails(...productNumbers);
    });
  }

  static productQuantity(quantity) {
    it("Increase quantity to 4", () => {
      increaseQuantity(quantity);
    });
  }

  static verifyClickAddToCart() {
    it("Click 'Add to cart' button", () => {
      clickAddToCart();
    });  
  }

  static verifyProductQuantity(productNumber, quantity) {
    it("Verify that product is displayed in cart page with exact quantity", () => {
      productQuantity(productNumber, quantity);
    });
  }

  static verifyCheckoutButton() {
    it("Click Proceed To Checkout", () => {
      clickCheckoutButton();
    });
  }

  static verifyRegisterLoginLink() {
     it("Click 'Register / Login' button", () => {
      clickRegisterLoginLink();
    });
  }

  static verifyDescription(){
    it("Enter description in comment text area", () => {
      enterDescription();
    });
  }

  static verifyOrderAdded() {
    it("Click 'Place Order'", () => {
      clickPlaceOrder();
    });
  }

  static verifyProductExists(productNumber) {
    it("Verify product is in cart", () => {
      productExists(productNumber);
    });
  }

  static verifyProductRemoval(...productNumber) {
    it("Click 'X' button corresponding to particular product", () => {
      removeProduct(...productNumber);
    });
  }

  static verifyProductRemoved(...productNumber) {
    it("Verify that product is removed from the cart", () => {
      productRemoved(...productNumber);
    });
  }

  static verifyCategories() {
    it('Verify that categories are visible on left side bar', () => {
      genderCategories();
    });
  }

  static verifyClickedCategory(gender) {
    it(`Click on ${gender} category`, () => {
      clickCategory(gender);
    });
  }

  static verifySubCategory(subCategory) {
    it(`Click ${subCategory}`, () => {
      clickSubCategory(subCategory);
  });
  }

  static testBrands() {
    it("Verify that Brands are visible on left side bar", () => {
      verifyBrands();
    });
  }

  static verifyBrands(brand) {
    it(`Click on ${brand} brand name`, () => {
      clickBrands(brand);
    });
  }

  static verifyWriteReviewIndicator() {
    it("Verify 'Write Your Review' is visible", () => {
      writeReviewIndicator();
    });
  }

  static verifyProductReview() {
    it("Enter name, email and review", () => {
      enterProductReview();
    });
  }

  static verifyReviewSuccessNotification() {
    it("Verify success message 'Thank you for your review.'", () => {
      reviewSuccessNotification();
    });
  }

  static verifyRecommendedItemsHeader() {
    it("Verify 'RECOMMENDED ITEMS' are visible", () => {
      recommendedItemsHeader();
    });
  }

  static verifyAddToCartRecommendedItems() {
    it("Click on 'Add To Cart' on Recommended product", () => {
      addToCartRecommendedItems();
    });
  }

}

export default Products;