describe("Should run project properly", () => {
  it("should open app and run correctly", () => {
    cy.visit("/");
    cy.get(".SearchForm_search__05r10").type("sarojdahal8848");
    cy.get(".SearchForm_button__E1rOv").click();
    cy.url().should("include", "/search?userName=sarojdahal8848");
    cy.get(".ProfileCard_card__N5C2J").should("exist");
  });
});
