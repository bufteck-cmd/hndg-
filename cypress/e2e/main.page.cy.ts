// https://docs.cypress.io/api/introduction/api.html

describe("Test main page", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("nav", "MyVet.Uz");
    cy.contains("nav", "Главная");
    cy.contains("nav", "Наши услуги");
    cy.contains("nav", "Вход");
    cy.contains("nav", "О нас");
    cy.contains("footer", "All Rights Reserved");
  });
});
