class HomePage {
  enterURL() {
    cy.visit('');
  }

  validateBrowser() {
    const expectedBrowser = 'electron'; // измени по желанию
    const actual = Cypress.browser.name;
    expect(actual, `Ожидался браузер "${expectedBrowser}", а запущен "${actual}"`).to.eq(
      expectedBrowser
    );
  }

  verifyPageTitle() {
    return cy.title().should('eq', 'Your Store');
  }

  verifyText() {
    return cy.contains('Top Trending Categories');
  }

  clickSubmitButton() {
    // Scroll to the top of the page to ensure the menu is accessible
    cy.scrollTo('top');
    
    // Wait for any animations to complete
    cy.wait(1000);
    
    // Click the Components menu with more specific selector and force option
    cy.get('a.nav-link:contains("Components")')
      .first()
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    // Wait for the Laptops link to be visible and click it
    return cy.contains('a', 'Laptops')
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true });
  }

  validateText() {
    cy.get('.h3').contains('Apple Cinema 30"');
  }
}

const homepage = new HomePage();
export default homepage;
