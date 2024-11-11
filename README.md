# CRUD de Fornecedores em Node.js com MySQL de uma Loja de Tênis

Este projeto é um sistema CRUD desenvolvido em Node.js e Express, que permite a manipulação de dados de fornecedores em um banco de dados MySQL. Ele fornece APIs para listar, adicionar, atualizar e remover fornecedores, com o objetivo de facilitar o gerenciamento dessas entidades.

## Índice
- [Descrição do Projeto](#descrição-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Licença](#licença)
- [Contribuidores](#contribuidores)

## Descrição do Projeto
Este programa conecta-se ao banco de dados MySQL e realiza operações de CRUD para gerenciar registros de fornecedores, incluindo:
- Inserção de novos fornecedores.
- Visualização dos registros de fornecedores.
- Atualização e remoção de registros de fornecedores.

## Pré-requisitos
- **Node.js** (versão 14+)
- **MySQL** (Servidor MySQL em execução)
- **Biblioteca MySQL para Node.js:** MySQL2 instalada como dependência do projeto.


## Instalação da Biblioteca MySQL para Node.js
A biblioteca MySQL2 já está especificada no arquivo package.json deste projeto, mas caso precise instalar manualmente, use:
```
npm install mysql2
```

## Configuração do Banco de Dados
1. Certifique-se de que o servidor MySQL está em execução.
2. Crie o banco de dados e a tabela necessárias:
```
CREATE DATABASE loja_tenis;
USE loja_tenis;

CREATE TABLE fornecedores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(100),
    telefone VARCHAR(15),
    endereco VARCHAR(150)
);
```
## Como Executar o Projeto
1. Clone o repositório e abra a pasta do projeto no VS Code.
2. Abra o terminal integrado no VS Code (Ctrl + `` ou Terminal > Novo Terminal`).
3. Instale as dependências do projeto:
```
npm install
```
4. Configure o arquivo mysql.js com as credenciais de acesso ao banco de dados, caso necessário.
5. Inicie o servidor:
```
npm start
```
O servidor estará disponível na porta definida (ex: http://localhost:3000).

## Funcionalidades
- Listar Fornecedores: Exibe todos os fornecedores cadastrados no banco de dados.
- Visualizar Fornecedor por ID: Mostra os detalhes de um fornecedor específico.
- Cadastrar Novo Fornecedor: Adiciona um novo registro de fornecedor.
- Atualizar Fornecedor: Permite editar informações de um fornecedor existente.
- Remover Fornecedor: Exclui um fornecedor do banco de dados.

## Dicas para Configuração no VS Code
- Extensões Recomendadas:
  - Node.js Extension Pack: Extensão que facilita o desenvolvimento em Node.js, incluindo intellisense e snippets.
  - MySQL (ou outra extensão de cliente SQL) para conectar-se e visualizar o banco de dados diretamente no VS Code.
  - ESLint: Para manter o código limpo e consistente.
- Depuração: Configure a depuração do Node.js no VS Code:
1. Acesse Executar e Depurar no painel esquerdo.
2. Clique em Criar um arquivo launch.json e selecione Node.js como ambiente.
3. Isso permite definir breakpoints e depurar diretamente no editor.

## Licença
Este projeto é de uso educacional e pode ser livremente modificado.

## Contribuidores

Agradeço a seguinte pessoa por contribuir para este projeto:

- [Murilo Faveri](https://github.com/MuhFaveri) - Implementação do código base.
