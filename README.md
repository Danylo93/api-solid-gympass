# App

Gympass style app

## RFs (Requisitos Funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar
- [x] Deve ser possível obter o perfil de um usuario logado
- [] Deve ser possível obter o numero de check-ins realizados pelo usuário
- [] Deve ser possível o usuario obter seu histórico de check-ins
- [] Deve ser possível o usuario buscar academias proximas
- [] Deve ser possível o usario buscar academias pelo nome
- [x] Deve ser possível o usuario realizar check-in em uma academia
- [] Deve ser possível validar o check-in de um usuario
- [x] Deve ser possível cadastrar uma academia

## RNs (Regras de Negócio)

- [x] O usuario nao deve poder se cadastrar com um e-mail duplicado
- [x] O usuario nao pode fazer 2 check-ins no mesmo dia
- [x] O usuario nao pode fazer check-in se nao estiver perto (100m) da academia
- [] O check-in so pode ser validado ate 20 minutos apos criado
- [] O check-in so pode ser validado por admin
- [] O check-in so pode ser cadastrado por admin

## RNFs (Requisitos não-funcionais) // Qual estrategia vou utilizar ? ( BD, Geolocalizacão)

- [x] a senha do usuario precisa ser criptografia
- [x] Os dados da aplicacao precisam estar persistidos em um banco pOSTGRESQL
- [] Todas as listas de dados precisam estar paginadas com 20 itens por pagina
- [] o usuario deve ser identificado por um JWT (json web token)

// SOLID

// D - Dependency Inversion Principle
// receber as dependencias como parametro

// TESTES -
// TESTE UNITÁRIOS - TESTE SEM INTEGRACAO EXTERNA
// TESTE DE INTEGRACAO - QUANDO O TESTE É FEITO DENTRO DO BANCO DE DADOS

// FERRAMENTA: VITEST
// yarn add vitest vite-tsconfig-paths -D

// TDD - TESTE DRIVEN DEVELOPMENT(Metodologia) - DESENVOLVIMENTO DIRIGIDO A TESTES
// etapas de testes: red , green , refactor
