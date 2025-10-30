/// <reference types="cypress" />


import userData from '../fixtures/example.json';
import wrongData from '../fixtures/example_data_wrong.json';
import messages from '../fixtures/messages.json';
import contactData from '../fixtures/form_contact.json';
import {
    getRandomEmail
} from '../support/helpers';

describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    });

    it.only('Register User', () => {
        cy.get('a[href="/login"]').click();

        cy.get('input[data-qa="signup-name"]').type(userData.nome);
        cy.get('input[data-qa="signup-email"]').type(getRandomEmail());
        cy.contains('button', 'Signup').click();

        cy.get('input[type="radio"]').check(userData.tratamento);
        cy.get('input#password').type(userData.senha, { log: false });
        cy.get('[data-qa="days"]').select(userData.data_nascimento.dia);
        cy.get('[data-qa="months"]').select(userData.data_nascimento.mes);
        cy.get('[data-qa="years"]').select(userData.data_nascimento.ano);
        cy.get('input[type="checkbox"]#newsletter').check();
        cy.get('input[type="checkbox"]#optin').check();

        cy.get('input#first_name').type(userData.primeiro_nome);
        cy.get('input#last_name').type(userData.ultimo_nome);
        cy.get('input#company').type(userData.empresa);
        cy.get('input#address1').type(userData.endereco);
        cy.get('input#address2').type(userData.endereco2);
        cy.get('select#country').select(userData.pais);
        cy.get('input#state').type(userData.estado);
        cy.get('input#city').type(userData.cidade);
        cy.get('[data-qa="zipcode"]').type(userData.cep);
        cy.get('input[data-qa="mobile_number"]').type(userData.numero_telefone);

        cy.get('[data-qa="create-account"]').click();

        cy.url().should('includes', 'account_created');
        cy.get('h2[data-qa="account-created"]').should('have.text', messages.sucesso_conta_criada);
    });

    it('Login User with correct email and password', () => {
        cy.get('a[href="/login"]').click();

        cy.get('input[data-qa="login-email"]').type(userData.email);
        cy.get('input[data-qa="login-password"]').type(userData.senha, { log: false });
        cy.contains('button', 'Login').click();

        cy.get('a[href="/logout"]').should('be.visible');
        cy.get('i.fa-user').parent().should('contain', userData.nome);
    });

    it('Login User with incorrect email and password', () => {
        cy.get('a[href="/login"]').click();

        cy.get('input[data-qa="login-email"]').type(wrongData.email_errado);
        cy.get('input[data-qa="login-password"]').type(wrongData.senha_errada, { log: false });
        cy.contains('button', 'Login').click();

        cy.get('.login-form > form > p').should('contain', messages.erro_login);
    });

    it('Logout User', () => {
        cy.get('a[href="/login"]').click();

        cy.get('input[data-qa="login-email"]').type(userData.email);
        cy.get('input[data-qa="login-password"]').type(userData.senha, { log: false });
        cy.contains('button', 'Login').click();

        cy.get('a[href="/logout"]').click();

        cy.get('a[href="/login"]').should('be.visible');
        cy.get('a[href="/login"]').should('contain', 'Signup / Login');
    });

    it('Register User with existing email', () => {
        cy.get('a[href="/login"]').click();

        cy.get('input[data-qa="signup-name"]').type(userData.nome);
        cy.get('input[data-qa="signup-email"]').type(userData.email);
        cy.contains('button', 'Signup').click();

        cy.get('.signup-form > form > p').should('contain', messages.erro_email_existente);
    });

    it('Contact Us Form', () => {
        cy.get('a[href="/contact_us"]').click();

        cy.get('input[data-qa="name"]').type(userData.nome);
        cy.get('input[data-qa="email"]').type(userData.email);
        cy.get('input[data-qa="subject"]').type(contactData.assunto);
        cy.get('textarea[data-qa="message"]').type(contactData.mensagem);
        cy.fixture('arquivo.jpg').as('arquivo');
        cy.get('input[type="file"]').selectFile('@arquivo');

        cy.get('input[data-qa="submit-button"]').click();

        cy.url().should('includes', 'contact_us');
        cy.get('.contact-form > .status.alert.alert-success').should('contain', messages.sucesso_envio_formulario_contato);
    });

    /*it('Verify all products and product detail page', () => {
        
    });

    it('Search Product', () => {
        
    });

    it('Verify subscription in home page', () => {
        
    });

    it('Place order: register before checkout', () => {
        
    });*/
});