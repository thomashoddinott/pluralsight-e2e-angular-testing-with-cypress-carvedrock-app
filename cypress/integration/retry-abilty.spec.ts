describe('Retry-ability', () => {
  it('should have filtered-by criterea displayed', () => {
    cy.visit('/')

    cy.get('input').type('Tara')

    cy.get('ul li')
      .should('have.length', 2)
      .find('p[data-test-automation="filtered-by"] b')
      .should('have.text', 'Tara')
    })
})