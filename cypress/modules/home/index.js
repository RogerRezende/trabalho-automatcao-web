import userData from '../../fixtures/example.json';
import messages from '../../fixtures/messages.json';

class Home {
    irAtéFinalDaPagina() {
        cy.scrollTo('bottom');
    }
    preencherCampoSubscribe() {
        cy.get('#susbscribe_email').type(userData.email);
        cy.get('#subscribe').click();
    }
    validarSubscribeComSucesso() {
        cy.get('.alert-success').should('have.text', messages.sucesso_subscribe);
    }
}

export default new Home();
