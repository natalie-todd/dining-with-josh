describe("Page content", () => {
    it("shows correct content", () => {
        cy.visit("/");
        cy.get("main").contains("ORDER JOSH-FRIENDLY FOOD NOW!")
        cy.get("nav").contains("Menu");
        cy.contains("Menu").click();
        cy.url().should("contain", "/app.html");
        cy.get("main").contains("Checkout Now");
        cy.get("nav").contains("Home");
        cy.contains("Home").click();
        cy.url().should("contain", "/index.html");
    });
});