import userData from '../../fixtures/example.json';
import messages from '../../fixtures/messages.json';
import { 
    faker
} from '@faker-js/faker';

class Cadastro {
    preencherCadastro() {
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
    }
    preencherCadastroRandomico() {
        const randomEmpresa = faker.company.name();
        const randomEndereco1 = faker.location.streetAddress();
        const randomEndereco2 = faker.location.streetAddress();
        const randomCidade = faker.location.city();
        const randomEstado = faker.location.state();
        const randomCep = faker.location.zipCode();

        cy.get('input[type="radio"]').check(userData.tratamento);
        cy.get('input#password').type(userData.senha, { log: false });
        cy.get('[data-qa="days"]').select(userData.data_nascimento.dia);
        cy.get('[data-qa="months"]').select(userData.data_nascimento.mes);
        cy.get('[data-qa="years"]').select(userData.data_nascimento.ano);
        cy.get('input[type="checkbox"]#newsletter').check();
        cy.get('input[type="checkbox"]#optin').check();

        cy.get('input#first_name').type(userData.primeiro_nome);
        cy.get('input#last_name').type(userData.ultimo_nome);
        cy.get('input#company').type(randomEmpresa);
        cy.get('input#address1').type(randomEndereco1);
        cy.get('input#address2').type(randomEndereco2);
        cy.get('select#country').select(userData.pais);
        cy.get('input#state').type(randomEstado);
        cy.get('input#city').type(randomCidade);
        cy.get('[data-qa="zipcode"]').type(randomCep);
        cy.get('input[data-qa="mobile_number"]').type(userData.numero_telefone);

        cy.get('[data-qa="create-account"]').click();
    }
    validarContaCriada() {
        cy.url().should('includes', 'account_created');
        cy.get('h2[data-qa="account-created"]').should('have.text', messages.sucesso_conta_criada);
    }
}

export default new Cadastro();
