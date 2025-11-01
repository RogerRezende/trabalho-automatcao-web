import userData from '../../fixtures/example.json';
import { 
    faker
} from '@faker-js/faker';

class Carrinho {
    colocarProdutoNoCarrinho() {
        cy.get('button[class="btn btn-default cart"]').click();
        cy.get('#cartModal').should('be.visible');
        cy.get('#cartModal > .modal-dialog.modal-confirm > .modal-content > .modal-body > .text-center > a').click();
    }
    navegarParaCheckout() {
        cy.get('#cart_items > .container > #do_action > .container > .row > .col-sm-6 > .btn').click();
    }
    navegarParaPagamento() {
        cy.get('a[href="/payment"]').click();
    }
    preencherDetalhesPagamento() {
        const nomeCartaoCredito = faker.person.fullName();
        const numeroCartaoCredito = faker.finance.creditCardNumber();
        const cvvCartaoCredito = faker.finance.creditCardCVV();

        cy.get('input[name="name_on_card"]').type(nomeCartaoCredito);
        cy.get('input[name="card_number"]').type(numeroCartaoCredito);
        cy.get('input[name="cvc"]').type(cvvCartaoCredito);
        cy.get('input[name="expiry_month"]').type(userData.data_cartao_credito.mes);
        cy.get('input[name="expiry_year"]').type(userData.data_cartao_credito.ano);
        cy.get('#submit').click();
    }
    validarPagamentoComSucesso() {
        cy.url().should('includes', 'payment_done');
        cy.get('h2[data-qa="order-placed"]').should('have.text', 'Order Placed!');
    }
}

export default new Carrinho();
