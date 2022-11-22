describe('Adventure', () => {
  it('should visit CarvedRock homepage', () => {
    cy.visit('/')
  });

  it('should open the Breithorn adventure', () => {
    cy.get('a[href="/adventure/1"]').click()
    cy.get('#title').should('have.text', 'Breithorn, Pennine Alps')
  })

  // can use lib like `fakerjs` to randomly generate name and comment 
  const name = 'Josh'
  const comment = 'What a great adventure!'
  it('should post a comment', () => {
    cy.contains('Reset Comments').click()
    cy.contains('Add Comment').click();

    cy.get('#name').type(name)
    cy.get('#comment-text').type(comment)
    cy.get('#add-comment-button').click()

    // cy.get('div[data-test-automation="user-comments"] blockquote:last-child p')
    //   .should('have.text', comment)
    // cy.get('div[data-test-automation="user-comments"] blockquote:last-child footer')
    //   .should('have.text', name)
    cy.get('div[data-test-automation="user-comments"] blockquote:last-child').then($el => {
      cy.wrap($el).find('p').should('have.text', comment);
      cy.wrap($el).find('footer').should('have.text', name)
    })
  })

  it('should not post a comment if the comment text is missing', () => {
    cy.contains('Reset Comments').click()
    cy.contains('Add Comment').click();
    cy.get('#name').type(name)
    cy.get('#add-comment-button').click()

    cy.get('div[data-test-automation="comment-text"] .text-danger')
      .should('have.text', 'Comment is required.')
  })
})