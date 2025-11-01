import productData from '../../fixtures/products.json';

class Produtos {
    navegarParaOPrimeiroProduto() {
        cy.get('a[href="/product_details/1"]').click();
    }
    realizarBuscaDeProduto() {
        cy.get('#search_product').type(productData.produto);
        cy.get('#submit_search').click();
    }
    validarPaginaListaDeProdutos() {
        cy.url().should('includes', 'products');
        cy.get('.features_items').should('be.visible');
        cy.get('.features_items > .title.text-center').should('have.text', productData.todosProdutos);
    }
    validarPaginaDetalheDoProduto() {
        cy.url().should('includes', 'product_details/1');
    }
    validarPaginaBuscaDeProduto() {
        cy.url().should('includes', 'products?search=Blue%20Top');
        cy.get('.features_items').should('be.visible');
        cy.get('.features_items > .title.text-center').should('have.text', productData.buscaProdutos);
    }
}

export default new Produtos();
