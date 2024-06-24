describe('My first test', () => {
  it('Visits wikipedia, kitchen sink my ass', () => {
    cy.visit('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')

    cy.get('.frb-layout')

    cy.url().should('include', '/Wiki')

    cy.get('#searchInput').type('John Lennon')

    cy.get('#searchInput').should('have.value', 'John Lennon')
  })
})