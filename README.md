## Introducing Cypress

**What is Cypress?**

... (watch beginning again)

**End-to-end Testing** 

==> A type of testing in which business processes are tested from start to finish under production-like circumstances

**Login Example** (Canonical e2e testing example)

We have our login page, and all the stuff behind the scenes (3rd party id provider, auth middleware, etc), and e2e just verifies that "everything worked". That's contrasted to unit testing, which tests us what specifically worked.

UI testing = e2e testing

## Trade-offs

**Permanent**

- Not used to index web pages, perform performance testing, or to script 3rd part sites
- Communication with BE like server or DB is limited
- There is no multi-tab support
- Doesn't support multiple browsers open at the same time
- Tests are limited to the same origin

**Temporary**

- Workaround required for `cy.hover()` command - https://docs.cypress.io/api/commands/hover

See docs for more

## Demo

Use `data-cy` attributes in html specifically for Cypress tests







