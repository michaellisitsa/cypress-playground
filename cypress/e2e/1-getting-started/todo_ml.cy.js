/// <reference types="cypress" />
describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://example.cypress.io/todo");
  });
  it("displays two todo items by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get(".todo-list li").should("have.length", 2);
  });
  it("has a header bar at the top", () => {
    const navbar = cy.get(".navbar");
    navbar.should("exist");
  });
  it("has a header bar at the top", () => {
    cy.get(".header h1").contains("todos");
  });
});
