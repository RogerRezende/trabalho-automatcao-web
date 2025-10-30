import userData from '../../fixtures/example.json';
import messages from '../../fixtures/messages.json';
import contactData from '../../fixtures/form_contact.json';

class Contato {
    preencherFormularioContato() {
        cy.get('input[data-qa="name"]').type(userData.nome);
        cy.get('input[data-qa="email"]').type(userData.email);
        cy.get('input[data-qa="subject"]').type(contactData.assunto);
        cy.get('textarea[data-qa="message"]').type(contactData.mensagem);

        cy.fixture('arquivo.jpg').as('arquivo');
        cy.get('input[type="file"]').selectFile('@arquivo');

        cy.get('input[data-qa="submit-button"]').click();
    }
    validarFormularioContatoEnviadoComSucesso() {
        cy.url().should('includes', 'contact_us');
        cy.get('.contact-form > .status.alert.alert-success').should('contain', messages.sucesso_envio_formulario_contato);
    }
}

export default new Contato();
