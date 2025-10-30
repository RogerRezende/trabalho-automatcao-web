import userData from '../../fixtures/example.json';
import wrongData from '../../fixtures/example_data_wrong.json';
import messages from '../../fixtures/messages.json';
import {
    getRandomEmail
} from '../../support/helpers';
import { 
    faker
} from '@faker-js/faker';

class Login {
    preencherPreCadastro() {
        cy.get('input[data-qa="signup-name"]').type(userData.nome);
        cy.get('input[data-qa="signup-email"]').type(getRandomEmail());
        cy.contains('button', 'Signup').click();
    }
    preencherPreCadastroRandomico() {
        const randomNome = faker.person.fullName();
        const randomEmail = faker.internet.email();

        cy.get('input[data-qa="signup-name"]').type(randomNome);
        cy.get('input[data-qa="signup-email"]').type(randomEmail);
        cy.contains('button', 'Signup').click();
    }
    preencherPreCadastroComEmailExistente() {
        cy.get('input[data-qa="signup-name"]').type(userData.nome);
        cy.get('input[data-qa="signup-email"]').type(userData.email);
        cy.contains('button', 'Signup').click();
    }
    fazerLogin(){
        cy.get('input[data-qa="login-email"]').type(userData.email);
        cy.get('input[data-qa="login-password"]').type(userData.senha, { log: false });
        cy.contains('button', 'Login').click();
    }
    fazerLoginSemSucesso(){
        cy.get('input[data-qa="login-email"]').type(wrongData.email_errado);
        cy.get('input[data-qa="login-password"]').type(wrongData.senha_errada, { log: false });
        cy.contains('button', 'Login').click();
    }
    validarPreCadastroComEmailExistente() {
        cy.get('.signup-form > form > p').should('contain', messages.erro_email_existente);
    }
    validarLoginComSucesso() {
        cy.get('a[href="/logout"]').should('be.visible');
        cy.get('i.fa-user').parent().should('contain', userData.nome);
    }
    validarLoginSemSucesso() {
        cy.get('.login-form > form > p').should('contain', messages.erro_login);
    }
    validarLogoutComSucesso() {
        cy.get('a[href="/login"]').should('be.visible');
        cy.get('a[href="/login"]').should('contain', 'Signup / Login');
    }
}

export default new Login();
