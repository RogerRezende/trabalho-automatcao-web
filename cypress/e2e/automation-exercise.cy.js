/// <reference types="cypress" />


describe('Automation Exercise', () => {
    it('Cadastrar um usuário', () => {
        const timestamp = new Date().getTime();

        cy.visit('https://automationexercise.com/');

        cy.get('a[href="/login"]').click();

        cy.get('input[data-qa="signup-name"]').type('QA Tester');
        cy.get('input[data-qa="signup-email"]').type(`qa.tester-${timestamp}@example.com`);
        cy.contains('button', 'Signup').click();

        cy.get('input[type="radio"]').check('Mr');
        cy.get('input#password').type('SecurePass123', { log: false });
        cy.get('[data-qa="days"]').select('10');
        cy.get('[data-qa="months"]').select('May');
        cy.get('[data-qa="years"]').select('1990');
        cy.get('input[type="checkbox"]#newsletter').check();
        cy.get('input[type="checkbox"]#optin').check();

        cy.get('input#first_name').type('QA');
        cy.get('input#last_name').type('Tester');
        cy.get('input#company').type('QA Company');
        cy.get('input#address1').type('123 Testing St');
        cy.get('input#address2').type('Suite 100');
        cy.get('select#country').select('Canada');
        cy.get('input#state').type('Test State');
        cy.get('input#city').type('Test City');
        cy.get('[data-qa="zipcode"]').type('A1B 2C3');
        cy.get('input[data-qa="mobile_number"]').type('+1234567890');

        cy.get('[data-qa="create-account"]').click();

        cy.url().should('includes', 'account_created');
        cy.contains('b', 'Account Created!')
        cy.get('h2[data-qa="account-created"]').should('have.text', 'Account Created!');
    });
});