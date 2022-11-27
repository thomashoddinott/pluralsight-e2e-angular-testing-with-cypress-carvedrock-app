describe('Filter', () => {
  it('should display filter criterea', () => {
    cy.visit('/')
      .filterAdventures('Tara')

    cy.get('p[data-test-automation="filtered-by"')
      .should('have.text', 'Filtered by: Tara')
  })
})  