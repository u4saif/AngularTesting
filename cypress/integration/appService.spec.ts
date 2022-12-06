describe("First Cypress Test Running",()=>{

    it("Should Show first Running passed",()=>{
        expect(true).to.be.true;
        expect(42).to.equal(42);
    });

    it("Should Show End to End Test",()=>{
       cy.visit('/');
       cy.contains("Welcome to Angular Testing");
    });
});