class HomePage {
  enterURL() {
    cy.visit('');
  }

  validateBrowser() {
    const expectedBrowser = 'chrome'; // измени по желанию
    const actual = Cypress.browser.name;
    expect(actual, `Ожидался браузер "${expectedBrowser}", а запущен "${actual}"`).to.eq(
      expectedBrowser
    );
  }

  verifyPageTitle() {
    return cy.title().should('eq', 'Your Store');
  }

  verifyText() {
    return cy.contains('Tip Trending Categories');
  }

  clickSubmitButton() {
    return cy
      .get('#mz-product-listing-image-39217984-0-1 > .carousel-inner > .active > .lazy-load')
      .click();
  }

  validateText() {
    cy.get('.h3').contains('Apple Cinema 30"');
  }
}

const homepage = new HomePage();
export default homepage;
