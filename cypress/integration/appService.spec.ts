describe("First Cypress Test Running",()=>{

    it("Should Show first Running passed",()=>{
        expect(true).to.be.true;
        expect(42).to.equal(42);
        cy.visit('/');
    });
});