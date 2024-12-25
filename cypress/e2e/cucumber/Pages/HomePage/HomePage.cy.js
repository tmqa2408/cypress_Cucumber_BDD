class HomePage {

  enterURL() {
    
    // cy.visit(Cypress.env('URL'));
    cy.visit('')

  }

  verifyPageTitle() {
    return cy.title().should("eq", "Your Store");
  }

  verifyText() {
    return cy.contains('Top Trending Categories')
  }

  clickSubmitButton() {
    return cy.get('#mz-product-listing-image-39217984-0-1 > .carousel-inner > .active > .lazy-load').click()
  }

  // validateCode() {
  // cy.request(URL).response.status().to.eq(200)
  // }

  validateText() {
    cy.get('.h3').contains('Apple Cinema 30"')
    }
}
const homepage = new HomePage();
export default homepage;