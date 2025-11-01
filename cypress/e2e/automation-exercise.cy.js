/// <reference types="cypress" />

import menu from '../modules/menu';
import login from '../modules/login';
import cadastro from '../modules/cadastro';
import contato from '../modules/contato';
import produtos from '../modules/produtos';
import home from '../modules/home';
import carrinho from '../modules/carrinho';

describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    });

    it('Register User', () => {
        menu.navegarParaLogin();
        login.preencherPreCadastro();
        cadastro.preencherCadastro();
        cadastro.validarContaCriada();
    });

    it('Register User with random data', () => {
        menu.navegarParaLogin();
        login.preencherPreCadastroRandomico();
        cadastro.preencherCadastroRandomico();
        cadastro.validarContaCriada();
    });

    it('Login User with correct email and password', () => {
        menu.navegarParaLogin();
        login.fazerLogin();
        login.validarLoginComSucesso();
    });

    it('Login User with incorrect email and password', () => {
        menu.navegarParaLogin();
        login.fazerLoginSemSucesso();
        login.validarLoginSemSucesso();
    });

    it('Logout User', () => {
        menu.navegarParaLogin();
        login.fazerLogin();
        menu.navegarParaLogout();
        login.validarLogoutComSucesso();
    });

    it('Register User with existing email', () => {
        menu.navegarParaLogin();
        login.preencherPreCadastroComEmailExistente();
        login.validarPreCadastroComEmailExistente();
    });

    it('Contact Us Form', () => {
        menu.navegarParaContactUs();
        contato.preencherFormularioContato();
        contato.validarFormularioContatoEnviadoComSucesso();
    });

    it('Verify all products and product detail page', () => {
        menu.navegarParaProdutos();
        produtos.validarPaginaListaDeProdutos();
        produtos.navegarParaOPrimeiroProduto();
        produtos.validarPaginaDetalheDoProduto();
    });

    it('Search Product', () => {
        menu.navegarParaProdutos();
        produtos.realizarBuscaDeProduto();
        produtos.validarPaginaBuscaDeProduto();
    });

    it('Verify subscription in home page', () => {
        home.irAtéFinalDaPagina();
        home.preencherCampoSubscribe();
        home.validarSubscribeComSucesso();
    });

    it.only('Place order: register before checkout', () => {
        menu.navegarParaLogin();
        login.preencherPreCadastro();
        cadastro.preencherCadastro();
        cadastro.clicarContinuarDepoisDeCriarConta();
        menu.navegarParaProdutos();
        produtos.validarPaginaListaDeProdutos();
        produtos.navegarParaOPrimeiroProduto();
        carrinho.colocarProdutoNoCarrinho();
        carrinho.navegarParaCheckout();
        carrinho.navegarParaPagamento();
        carrinho.preencherDetalhesPagamento();
        carrinho.validarPagamentoComSucesso();
    });
});