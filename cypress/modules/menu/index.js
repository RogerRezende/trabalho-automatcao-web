class Menu {
    navegarParaLogin() {
        cy.get('a[href="/login"]').click();
    }
    navegarParaContactUs() {
        cy.get('a[href="/contact_us"]').click();
    }
    navegarParaLogout() {
        cy.get('a[href="/logout"]').click();
    }
    navegarParaProdutos() {
        cy.get('a[href="/products"]').click();
    }
    navegarParaHome() {
        cy.get('a[href="/"]').click();
    }
}

export default new Menu();
