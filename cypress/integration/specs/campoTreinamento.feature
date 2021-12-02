Feature: Automatizando campo de treinamento

Scenario: Interagindo com o Header
    Given que o usuário esteja na home
    And clique no botão Clique me
    And o nome mude para Obrigado!
    And clique em Abrir Popup
    And clique em Abrir Popup do Mal
    When clicar em Resposta demorada
    Then o usuário deve conseguir interagir com todos botões do Header

Scenario: Cadastrando usuário com campo em branco
    Given que o usuário esteja na home
    And preencha o campo de Sobrenome
    And marque no radio button o Sexo
    And marque na checkbox suas comidas preferidas
    When clicar em Cadastrar
    Then Então o usuário não deve conseguir se cadastrar
    
Scenario: Cadastrando usuário
    Given que o usuário esteja na home
    And preencha os campos de nome
    And marque no radio button o sexo
    And marque na checkbox suas comidas preferidas
    And marque sua escolaridade
    And marque qual esporte pratica
    When clicar em Cadastrar
    Then Então o usuário deve conseguir se cadastrar

Scenario: Interagindo com botões de alerta
    Given que o usuário esteja na home
    And clique no botão de alerta
    Then o usuário deve ver o alerta e clicar em OK

 Scenario: Voltando ao começo da página
    Given que o usuário esteja na home
    When clicar em 'voltar'
    Then ele deve voltar ao começo da página   