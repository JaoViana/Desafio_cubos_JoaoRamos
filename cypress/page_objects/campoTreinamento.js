/// <reference types="cypress" />


const loc = {
    CAMPO: "Campo de Treinamento",
    CLICKME: "input[id='buttonSimple']",
    OBRIGADO: "input[value='Obrigado!']",
    ABRIRPOPUP: "input[id='buttonPopUpEasy']",
    ABRIRPOPUPMAL: "input[id='buttonPopUpHard']",
    REDEMORADA: "input[id='buttonDelay']",
    SOBRENOME: "input[id='elementosForm:sobrenome']",
    CAMPOSEXO: "input[id='elementosForm:sexo:0']",
    CAMPOCOMIDA: "input[id='elementosForm:comidaFavorita:0']",
    CADASTRO: "input[id='elementosForm:cadastrar']",
    NOME: "input[id='elementosForm:nome']",
    ESCOLARIDADE: "//select[@id='elementosForm:escolaridade']",
    ESPORTE: "//select[@id='elementosForm:esportes']",
    ALERT_BUTTON: 'input[id="alert"]',
    CONFIRM_ALERT_BUTTON: 'input[id="confirm"]',
    VOLTAR: "Voltar"
}

class formulario {
    static visit() {
        cy.visit("/")
        expect(loc.CAMPO).to.equal('Campo de Treinamento')
    }

    static click_me(){
        cy.get(loc.CLICKME).click()
    }

    static obrigado(){
        cy.get(loc.OBRIGADO)
        expect('Obrigado!').to.equal('Obrigado!')
    }

    static abrir_popup(){
        cy.get(loc.ABRIRPOPUP).click()
    }

    static abrir_popup_mal(){
        cy.get(loc.ABRIRPOPUPMAL).click()
    }

    static resposta_demorada(){
        cy.get(loc.REDEMORADA).click()
    }

    static campo_sobrenome(){
        cy.get(loc.SOBRENOME).type('Ramos')
        expect(loc.SOBRENOME).to.not.equal('ramos')
    }

    static campo_sexo(){
        cy.get(loc.CAMPOSEXO).check()
        expect(loc.CAMPOSEXO).to.equal(loc.CAMPOSEXO)
    }

    static campo_comida(){
        cy.get(loc.CAMPOCOMIDA).click()
        expect(loc.CAMPOCOMIDA).to.not.equal("Pizza")
    }

    static campo_cadastro(){
        cy.get(loc.CADASTRO).click()
        cy.expect("Status: Cadastrado!").to.equal('Status: Cadastrado!')

    }

    static campo_nao_cadastrado(){
        cy.expect("Status: Nao cadastrado").to.equal('Status: Nao cadastrado')
    }

    static campo_nome(){
        cy.get(loc.NOME).type("João")
        expect(loc.NOME).to.not.equal('juao')
    }

    static campo_escolaridade(){
        cy.xpath(loc.ESCOLARIDADE).select('Superior')
        expect({ ESCOLARIDADE: 'Superior' }).to.eql({ ESCOLARIDADE: 'Superior' })
    }

    static campo_esporte(){
        cy.xpath(loc.ESPORTE).select('Natacao')
        expect({ ESPORTE: 'Natacao' }).to.eql({ ESPORTE: 'Natacao' })
    }

    static clickOnAlertButton() {
        cy.get(loc.ALERT_BUTTON).click()
    }

    static checkAlert() {
        cy.on('window:alert', (text) => {
            expect(text).to.equal(`Alert Simples`)
          })
    }

    static clickOnConfirmAlertButton() {
        cy.get(loc.CONFIRM_ALERT_BUTTON).click()
    }

    static checkConfirmAlertOk() {
        cy.on('window:confirm', text => {
            expect(text === `Confirm Simples`).to.be.true;
            return true;
        });
    }

    static VOLTAR(){
        cy.contains("Voltar").click()
        expect('Voltar').to.equal('Voltar')
    }

}

export default formulario;
