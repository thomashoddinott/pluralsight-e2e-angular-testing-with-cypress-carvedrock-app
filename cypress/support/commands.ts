// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare namespace Cypress {
  interface Chainable {
    filterAdventure(text: string): void;
    createAdventure(id: number, title: string): void;
    deleteAdventure(id: number): void
  }
}

Cypress.Commands.add('filterAdventure', (text: string): void => {
  cy.window().then((window: Window) => {
    cy.wrap(window).its('FilterComponent').invoke('onChange', text);
    cy.wait(1000);
    cy.wrap(window).its('appRef').invoke('tick');
  });
});

Cypress.Commands.add('createAdventure', (id: number, title: string): void => {
  cy.request(
    'POST',
    'http://localhost:3000/adventures',
    {
      "id": id,
      "title": title,
      "image": "../../assets/adventure-images/carved-rock-img-6.jpg",
      "description": "Climbing Breithorn you will receive views that are remarkable. There is so much to see, including, the Matterhorn (4,478m), the Gendarm (4,106m), Monte Rosa (4,634m), the Roccia Nera (4,075m), among several more peaks and glaciers.",
      "level": "Beginner",
      "duration": "1 day",
      "mountainRange": "Alps",
      "numberOfParticipants": "3-6",
      "availability": "September",
      "defaultCommentsLength": 1,
      "comments": [
        {
          "name": "Tom",
          "comment": "If there is a majestic view, it must be from here!"
        },
        {
          "name": "Josh",
          "comment": "What a great adventure!"
        }
      ]
    },
  )
})

Cypress.Commands.add('deleteAdventure', (id: number): void => {
  cy.request(
    'DELETE',
    `http://localhost:3000/adventures/${id}`)
})