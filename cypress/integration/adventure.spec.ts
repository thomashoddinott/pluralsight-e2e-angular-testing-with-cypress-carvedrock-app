import { HomePage } from '../pages/home.page';
import { AdventureDetailsPage } from '../pages/adventure-details.page';

describe('Adventure', () => {
    const homePage = new HomePage();
    const adventureDetailsPage = new AdventureDetailsPage();

    const newAdventureId = 4
    const newAdventureName = 'New Adventure'
    it('should visit CarvedRock homepage', () => {
        cy.createAdventure(newAdventureId, newAdventureName)
        homePage.visit();
    });

    it('should open the Breithorn adventure', () => {
        homePage.clickMoreDetailsBtn(newAdventureId)
            .getAdventureTitle().should('have.text', newAdventureName);
    });

    it('should post a comment', () => {
        adventureDetailsPage.resetComments()
            .addComment('Josh', 'What a great adventure!')
            .getLastComment()
            .then($el => {
                cy.wrap($el).find('p').should('have.text', 'What a great adventure!');
                cy.wrap($el).find('footer').should('have.text', 'Josh');
            });
    });

    it('should not post a comment if the comment text is missing', () => {
        adventureDetailsPage.addComment('Josh', '')
            .getCommentFieldValidationError()
            .should('have.text', 'Comment is required.');
        cy.deleteAdventure(newAdventureId)    
    });
});
