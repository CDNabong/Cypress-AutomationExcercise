const products = {
  addToCart: "button.btn.btn-default.cart",
  continueShopping: "[data-dismiss='modal']",
  cartModal: ".modal-content",
  productName: ".product-information h2",
  productCategory: ".product-information p:nth-of-type(1)",
  productAvailability: ".product-information p:nth-of-type(2)",
  productCondition: ".product-information p:nth-of-type(3)",
  productBrand: ".product-information p:nth-of-type(4)",
  productPrice: "span span:first-of-type",
  women: {
    link: "a[href='#Women']",
    dress: {
      link: "a[href='/category_products/1']",
      3: "a[href='/product_details/3']",
      4: "a[href='/product_details/4']",
      38: "a[href='/product_details/38']"
    },
    tops: {
      link: "a[href='/category_products/2']",
      1: "a[href='/product_details/1']",
      5: "a[href='/product_details/5']",
      6: "a[href='/product_details/6']",
      7: "a[href='/product_details/7']",
      8: "a[href='/product_details/8']",
      42: "a[href='/product_details/42']"
    },
    saree: {
      link: "a[href='/category_products/7']",
      39: "a[href='/product_details/39']",
      40: "a[href='/product_details/40']",
      41: "a[href='/product_details/41']",
    }
  },
  men: {
    link: "a[href='#Men']",
    tShirts: {
      link: "a[href='/category_products/3']",
      2: "a[href='/product_details/2']",
      28: "a[href='/product_details/28']",
      29: "a[href='/product_details/29']",
      30: "a[href='/product_details/30']",
      31: "a[href='/product_details/31']",
      43: "a[href='/product_details/43']"
    },
    jeans: { 
      6: "a[href='/category_products/6']",
      33: "a[href='/product_details/33']",
      35: "a[href='/product_details/35']",
      37: "a[href='/product_details/37']"
    }
  },
  kids: {
    link: "a[href='#Kids']",
    dress: {
      link: "a[href='/category_products/4']",
      16: "a[href='/product_details/16']",
      19: "a[href='/product_details/19']",
      20: "a[href='/product_details/20']",
      21: "a[href='/product_details/21']",
      22: "a[href='/product_details/22']",
      23: "a[href='/product_details/23']"
    },
    topsAndShirts: {
      link: "a[href='/category_products/5']",
      11: "a[href='/product_details/11']",
      12: "a[href='/product_details/12']",
      13: "a[href='/product_details/13']",
      14: "a[href='/product_details/14']",
      15: "a[href='/product_details/15']",
      18: "a[href='/product_details/18']",
      24: "a[href='/product_details/24']"
    }
  },
  brands: {
    polo: "a[href='/brand_products/Polo']",
    HM: "a[href='/brand_products/H&M']",
    madame: "a[href='/brand_products/Madame']",
    mastHarbour: "a[href='/brand_products/Mast & Harbour']",
    babyHug: "a[href='/brand_products/Babyhug']",
    allenSollyJunior: "a[href='/brand_products/Allen Solly Junior']",
    kookieKids: "a[href='/brand_products/Kookie Kids']",
    biba: "a[href='/brand_products/Biba']"
  }
}

class Products {

  static viewProductNumber(productNumber) {
    const selector = `a[href='/product_details/${productNumber}']`;
    cy.clickElemContainsText(selector, 'View Product');
  }

  static verifyProductDetails() {
    cy.checkElemContainsText(products.productName, 'Blue Top');
    cy.checkElemContainsText(products.productCategory, 'Category: Women > Tops');
    cy.checkElemContainsText(products.productAvailability, 'In Stock');
    cy.checkElemContainsText(products.productCondition, 'New');
    cy.checkElemContainsText(products.productBrand, 'Polo');
    cy.checkElemContainsText(products.productPrice, 'Rs. 500');
  }


  static clickContinueShopping() {
    cy.get(products.continueShopping).click();
  }

}

export default Products;