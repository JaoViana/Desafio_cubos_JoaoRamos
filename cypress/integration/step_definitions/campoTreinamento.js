/// <reference types="cypress" />

import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import formulario from "../../page_objects/campoTreinamento"


Given(`que o usuário esteja na home`, () => {
	formulario.visit()
});

And(`clique no botão Clique me`, () => {
	formulario.click_me()
});

And(`o nome mude para Obrigado!`, () => {
	formulario.obrigado()
});

And(`clique em Abrir Popup`, () => {
	formulario.abrir_popup()
});

And(`clique em Abrir Popup do Mal`, () => {
	formulario.abrir_popup_mal()
});

When(`clicar em Resposta demorada`, () => {
	formulario.resposta_demorada()
});

Then(`o usuário deve conseguir interagir com todos botões do Header`, () => {
	cy.contains("Campo de Treinamento").click()
});

And(`preencha o campo de Sobrenome`, () => {
	formulario.campo_sobrenome()
});

And(`marque no radio button o Sexo`, () => {
	formulario.campo_sexo()
});

And(`marque na checkbox suas comidas preferidas`, () => {
	formulario.campo_comida()
});

When(`clicar em Cadastrar`, () => {
	formulario.campo_cadastro()
});

Then(`Então o usuário não deve conseguir se cadastrar`, () => {
	formulario.campo_nao_cadastrado()
});

And(/^preencha os campos de nome$/, () => {
	formulario.campo_nome()
	formulario.campo_sobrenome()
});

And(/^marque no radio button o sexo$/, () => {
	formulario.campo_sexo()
});

And(/^marque na checkbox suas comidas preferidas$/, () => {
	formulario.campo_comida()
});

And(/^marque sua escolaridade$/, () => {
	formulario.campo_escolaridade()
});

And(/^marque qual esporte pratica$/, () => {
	formulario.campo_esporte()
});

When(/^clicar em Cadastrar$/, () => {
	formulario.campo_cadastro()
});

Then(/^Então o usuário deve conseguir se cadastrar$/, () => {
	formulario.campo_cadastro()
});


And(/^clique no botão de alerta$/, () => {
	formulario.clickOnAlertButton()
});

Then(/^o usuário deve ver o alerta e clicar em OK$/, () => {
	formulario.checkAlert()
});



When(/^clicar em 'voltar'$/, () => {
	formulario.VOLTAR
});

Then(/^ele deve voltar ao começo da página$/, () => {
	formulario.visit()
});



