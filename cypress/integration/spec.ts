import * as Url from "url";

it("loads examples", () => {
  const url: Url = "http://localhost:4200";
  cy.visit(url);
  cy.contains("Hello World");
});
