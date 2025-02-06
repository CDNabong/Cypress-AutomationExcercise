const products = () => {
  cy.get('img[src="/get_product_picture/1"]')
    .should('be.visible')
  cy.get('img[src="/get_product_picture/2"]')
    .should('be.visible')
  cy.get('img[src="/get_product_picture/3"]')
    .should('be.visible')
  cy.get('img[src="/get_product_picture/4"]')
    .should('be.visible')  
  cy.get('img[src="/get_product_picture/5"]')
    .should('be.visible')  
};

class Products {
  
  static firstFiveProducts() {
    it('Verify first five products', () => {
      products();
    });
  }

}

export default Products;