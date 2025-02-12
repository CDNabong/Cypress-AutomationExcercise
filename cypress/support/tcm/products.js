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

export const menAddtoCartAllProducts = () => {
  it('should add men T-Shirt to cart', () => {
    cy.get(products.men.link).click();
    cy.get(products.men.tShirts.link).click();
    cy.get(products.men.tShirts.menTShirt).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add men V-Neck Shirt to cart', () => {
    cy.get(products.men.link).click();
    cy.get(products.men.tShirts.link).click();
    cy.get(products.men.tShirts.vNeckShirt).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add men Polo Shirt to cart', () => {
    cy.get(products.men.link).click();
    cy.get(products.men.tShirts.link).click();
    cy.get(products.men.tShirts.poloShirt).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add men Detail Shirt to cart', () => {
    cy.get(products.men.link).click();
    cy.get(products.men.tShirts.link).click();
    cy.get(products.men.tShirts.detailShirt).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add men Green Shirt to cart', () => {
    cy.get(products.men.link).click();
    cy.get(products.men.tShirts.link).click();
    cy.get(products.men.tShirts.greenShirt).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add men Graphic Shirt to cart', () => {
    cy.get(products.men.link).click();
    cy.get(products.men.tShirts.link).click();
    cy.get(products.men.tShirts.graphicShirt).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add men Stretch Jeans to cart', () => {
    cy.get(products.men.link).click();
    cy.get(products.men.jeans.link).click();
    cy.get(products.men.jeans.stretchJeans).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add men Straight Jeans to cart', () => {
    cy.get(products.men.link).click();
    cy.get(products.men.jeans.link).click();
    cy.get(products.men.jeans.straightJeans).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add men Slim Fit Jeans to cart', () => {
    cy.get(products.men.link).click();
    cy.get(products.men.jeans.link).click();
    cy.get(products.men.jeans.slimFitJeans).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
    //for checkout cy.get('.modal-body').contains('View Cart').click();
  });
};

export const womenAddtoCartAllProducts = () => {
  it('should add women Sleeveless Dress to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.dress.link).click();
    cy.get(products.women.dress.sleevelessDress).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add women Stylish Dress to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.dress.link).click();
    cy.get(products.women.dress.stylishDress).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add women Maxi Dress to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.dress.link).click();
    cy.get(products.women.dress.maxiDress).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add women Blue Top to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.tops.link).click();
    cy.get(products.women.tops.blueTop).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add women Winter Top to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.tops.link).click();
    cy.get(products.women.tops.winterTop).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add women White Top to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.tops.link).click();
    cy.get(products.women.tops.whiteTop).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add women Madame Top to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.tops.link).click();
    cy.get(products.women.tops.madameTop).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add women Green Top to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.tops.link).click();
    cy.get(products.women.tops.greenTop).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add women Lace Top to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.tops.link).click();
    cy.get(products.women.tops.laceTop).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add women Print Saree to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.saree.link).click();
    cy.get(products.women.saree.printSaree).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add women Red Linen Saree to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.saree.link).click();
    cy.get(products.women.saree.redLinenSaree).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add women Blue Linen Saree to cart', () => {
    cy.get(products.women.link).click();
    cy.get(products.women.saree.link).click();
    cy.get(products.women.saree.blueLinenSaree).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
    //for checkout cy.get('.modal-body').contains('View Cart').click();
  });
};

export const kidsAddtoCartAllProducts = () => {
  it('should add kids Sleeveless Top and Shorts to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.dress.link).click();
    cy.get(products.kids.dress.slevelessTopAndShorts).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Sleeveless Unicorn Dress to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.dress.link).click();
    cy.get(products.kids.dress.slevelessUnicornDress).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Embroided Dress to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.dress.link).click();
    cy.get(products.kids.dress.embroidedDress).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Mickey Dress to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.dress.link).click();
    cy.get(products.kids.dress.mickeyDress).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Pink Dress to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.dress.link).click();
    cy.get(products.kids.dress.pinkDress).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Multi Color Dress to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.dress.link).click();
    cy.get(products.kids.dress.multiColorDress).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Sleeveless Printed Top to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.topsAndShirts.link).click();
    cy.get(products.kids.topsAndShirts.slevelessPrintedTop).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Half Sleeves Pink Top to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.topsAndShirts.link).click();
    cy.get(products.kids.topsAndShirts.halfSLeevesPinkTop).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Frozen Top to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.topsAndShirts.link).click();
    cy.get(products.kids.topsAndShirts.frozenTop).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Full Sleeves Top to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.topsAndShirts.link).click();
    cy.get(products.kids.topsAndShirts.fullSleevesTop).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Printed Off Shoulder Top to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.topsAndShirts.link).click();
    cy.get(products.kids.topsAndShirts.printedOffShoulderTop).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Panda Shirt to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.topsAndShirts.link).click();
    cy.get(products.kids.topsAndShirts.pandaShirt).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
  });

  it('should add kids Blocked Shirt to cart', () => {
    cy.get(products.kids.link).click();
    cy.get(products.kids.topsAndShirts.link).click();
    cy.get(products.kids.topsAndShirts.blockedShirt).click();
    cy.get(products.addToCart).click();
    cy.get(products.cartModal).should('be.visible');
    cy.get(products.continueShopping).click();
    //for checkout cy.get('.modal-body').contains('View Cart').click();
  });
};

