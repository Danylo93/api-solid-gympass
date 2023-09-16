# App

Gympass style app

## RFs (Requisitos Funcionais)

- [] Deve ser possível se cadastrar;
- [] Deve ser possível se autenticar
- [] Deve ser possível obter o perfil de um usuario logado
- [] Deve ser possível obter o numero de check-ins realizados pelo usuário
- [] Deve ser possível o usuario obter seu histórico de check-ins
- [] Deve ser possível o usuario buscar academias proximas
- [] Deve ser possível o usario buscar academias pelo nome
- [] Deve ser possível o usuario realizar check-in em uma academia
- [] Deve ser possível validar o check-in de um usuario
- [] Deve ser possível cadastrar uma academia

## RNs (Regras de Negócio)

- [] O usuario nao deve poder se cadastrar com um e-mail duplicado
- [] O usuario nao pode fazer 2 check-ins no mesmo dia
- [] O usuario nao pode fazer check-in se nao estiver perto (100m) da academia
- [] O check-in so pode ser validado ate 20 minutos apos criado
- [] O check-in so pode ser validado por admin
- [] O check-in so pode ser cadastrado por admin

## RNFs (Requisitos não-funcionais) // Qual estrategia vou utilizar ? ( BD, Geolocalizacão)

- [] a senha do usuario precisa ser criptografia
- [] Os dados da aplicacao precisam estar persistidos em um banco pOSTGRESQL
- [] Todas as listas de dados precisam estar paginadas com 20 itens por pagina
- [] o usuario deve ser identificado por um JWT (json web token)

// SOLID

// D - Dependency Inversion Principle
 // receber as dependencias como parametro
