/// <reference types="cypress" />


describe('Automation Exercise', () => {
    it('Register User', () => {
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

    it('Login User with correct email and password', () => {
        cy.visit('https://automationexercise.com/');

        cy.get('a[href="/login"]').click();

        cy.get('input[data-qa="login-email"]').type('qa.tester-1761699660623@example.com');
        cy.get('input[data-qa="login-password"]').type('SecurePass123', { log: false });
        cy.contains('button', 'Login').click();

        cy.get('a[href="/logout"]').should('be.visible');
        cy.contains('a', 'Logged in as QA Tester');
    });

    it('Login User with incorrect email and password', () => {
        cy.visit('https://automationexercise.com/');

        cy.get('a[href="/login"]').click();

        cy.get('input[data-qa="login-email"]').type('wrong.email@example.com');
        cy.get('input[data-qa="login-password"]').type('WrongPassword', { log: false });
        cy.contains('button', 'Login').click();

        cy.contains('p', 'Your email or password is incorrect!')
    });

    it.only('Logout User', () => {
        cy.visit('https://automationexercise.com/');

        cy.get('a[href="/login"]').click();

        cy.get('input[data-qa="login-email"]').type('qa.tester-1761699660623@example.com');
        cy.get('input[data-qa="login-password"]').type('SecurePass123', { log: false });
        cy.contains('button', 'Login').click();

        cy.get('a[href="/logout"]').click();

        cy.url().should('eq', 'https://automationexercise.com/');
        cy.get('a[href="/login"]').should('be.visible');
    });

    /*it('Register User with existing email', () => {
        
    });

    it('Contact Us Form', () => {
        
    });

    it('Verify all products and product detail page', () => {
        
    });

    it('Search Product', () => {
        
    });

    it('Verify subscription in home page', () => {
        
    });

    it('Place order: register before checkout', () => {
        
    });*/
});