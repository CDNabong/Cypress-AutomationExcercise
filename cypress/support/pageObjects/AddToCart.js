const products = {
  addToCart: "button.btn.btn-default.cart",
  continueShopping: "[data-dismiss='modal']",
  cartModal: ".modal-content",
  women: {
    link: "a[href='#Women']",
    dress: {
      link: "a[href='/category_products/1']",
      sleevelessDress: "a[href='/product_details/3']",
      stylishDress: "a[href='/product_details/4']",
      maxiDress: "a[href='/product_details/38']"
    },
    tops: {
      link: "a[href='/category_products/2']",
      blueTop: "a[href='/product_details/1']",
      winterTop: "a[href='/product_details/5']",
      whiteTop: "a[href='/product_details/6']",
      madameTop: "a[href='/product_details/7']",
      greenTop: "a[href='/product_details/8']",
      laceTop: "a[href='/product_details/42']"
    },
    saree: {
      link: "a[href='/category_products/7']",
      printSaree: "a[href='/product_details/39']",
      redLinenSaree: "a[href='/product_details/40']",
      blueLinenSaree: "a[href='/product_details/41']",
    }
  },
  men: {
    link: "a[href='#Men']",
    tShirts: {
      link: "a[href='/category_products/3']",
      menTShirt: "a[href='/product_details/2']",
      vNeckShirt: "a[href='/product_details/28']",
      detailShirt: "a[href='/product_details/29']",
      poloShirt: "a[href='/product_details/30']",
      greenShirt: "a[href='/product_details/31']",
      graphicShirt: "a[href='/product_details/43']"
    },
    jeans: { 
      link: "a[href='/category_products/6']",
      stretchJeans: "a[href='/product_details/33']",
      straightJeans: "a[href='/product_details/35']",
      slimFitJeans: "a[href='/product_details/37']"
    }
  },
  kids: {
    link: "a[href='#Kids']",
    dress: {
      link: "a[href='/category_products/4']",
      slevelessTopAndShorts: "a[href='/product_details/16']",
      slevelessUnicornDress: "a[href='/product_details/19']",
      embroidedDress: "a[href='/product_details/20']",
      mickeyDress: "a[href='/product_details/21']",
      pinkDress: "a[href='/product_details/22']",
      multiColorDress: "a[href='/product_details/23']"
    },
    topsAndShirts: {
      link: "a[href='/category_products/5']",
      slevelessPrintedTop: "a[href='/product_details/11']",
      halfSLeevesPinkTop: "a[href='/product_details/12']",
      frozenTop: "a[href='/product_details/13']",
      fullSleevesTop: "a[href='/product_details/14']",
      printedOffShoulderTop: "a[href='/product_details/15']",
      pandaShirt: "a[href='/product_details/18']",
      blockedShirt: "a[href='/product_details/24']"
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

class AddToCart {
  
  static menAddToCart() {
    cy.get(products.men.link)
    .should('be.visible')
    .contains('Men')
    .and('have.css', 'color', 'rgb(105, 103, 99)')
    .click();
    cy.get(products.men.tShirts.link)
    .contains('Tshirts')
    .and('have.css', 'color', 'rgb(105, 103, 99)');
    cy.get(products.men.jeans.link)
    .contains('Jeans')
    .and('have.css', 'color', 'rgb(105, 103, 99)')
    .click();
    cy.get(products.men.jeans.stretchJeans)
    .click();
    cy.get(products.addToCart)
    .should('be.visible')
    .click();
    cy.get(products.continueShopping)
    .should('be.visible')
    .click();
  }

}

export default AddToCart;