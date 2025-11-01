class Produtos {
    navegarParaOPrimeiroProduto() {
        cy.get('a[href="/product_details/1"]').click();
    }
    validarPaginaListaDeProdutos() {
        cy.url().should('includes', 'products');
        cy.get('.features_items').should('be.visible');
        cy.get('.features_items > .title.text-center').should('have.text', 'All Products');
    }
    validarPaginaDetalheDoProduto() {
        cy.url().should('includes', 'product_details/1');
    }
}

export default new Produtos();
