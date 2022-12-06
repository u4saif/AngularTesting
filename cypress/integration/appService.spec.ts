describe("First Cypress Test Running",()=>{

    it("Should Show first Running passed",()=>{
        expect(true).to.be.true;
        expect(42).to.equal(42);
    });

    it("Should Show End to End Test",()=>{
       cy.visit('/');
       cy.contains("Welcome to Angular Testing");
    });

    it("HomePage End to End Test with MockBackend API",()=>{
        cy.fixture('users.json').as('usersJson');
        cy.server();
        cy.route("https://api.unsplash.com/photos?page=1&query=random&client_id=Wodf-s3S_rzzMqYGrFLhqunWZMOEDAqvSqX3Gci6DVM","@usersJson").as('cardData');
        cy.visit('/');
        cy.contains("Welcome to Angular Testing");
        cy.wait("@cardData");
        cy.get("div").should("have.length",11);
     });
});