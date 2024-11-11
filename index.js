//Importação das bibliotecas necessárias
const express = require('express');
const cors = require('cors');

//Declarando a função do express como constante
const app = express();

//Importação da conexão com a Data Base
const connection = require('./mysql');

//Definição da porta do servidor
const port = 3000;

// Configurações do Express
app.use(express.json());

// Configuração do CORS
app.use(cors());

//Teste de conexão da porta pelo postman/thunderclient e console
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Apocalipse!');
});

//------------------------------------------//
    
// Criando um array de fornecedores
let fornecedores = [
     
];

// Rota para listar todos os fornecedores(GET)
app.get("/fornecedores", (req, res) => {
    const query = 'SELECT * FROM fornecedores';
    connection.query(query, (error, results, fields) => {
        if (error) {
            res.status(500).json({ message: "Erro ao buscar fornecedores" });
            return;
        }
        res.json(results);
    });
});

// Rota para obter um fornecedor por ID(GET - Pesquisa)
app.get("/fornecedores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const query = 'SELECT * FROM fornecedores WHERE id = ?';
    connection.query(query, [id], (error, results, fields) => {
        if (error) {
            res.status(500).json({ message: "Erro ao buscar fornecedor" });
            return;
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ message: "Fornecedor não encontrado" });
        }
    });
});

// Rota para adicionar um novo fornecedor(POST)
app.post("/fornecedores", (req, res) => {
    const newFornecedor = req.body;
    const query = 'INSERT INTO fornecedores SET ?';
    connection.query(query, newFornecedor, (error, results, fields) => {
        if (error) {
            res.status(500).json({ message: "Erro ao adicionar fornecedor" });
            return;
        }
        res.status(201).json({ message: "Fornecedor adicionado com sucesso" });
    });
});

// Rota para atualizar um fornecedor(PUT)
app.put("/fornecedores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updateFornecedor = req.body;
    const query = 'UPDATE fornecedores SET ? WHERE id = ?';
    connection.query(query, [updateFornecedor, id], (error, results, fields) => {
        if (error) {
            res.status(500).json({ message: "Erro ao atualizar fornecedor" });
            return;
        }
        res.json({ message: "Fornecedor atualizado com sucesso" });
    });
});

// Rota para remover um fornecedor(DELETE)
app.delete("/fornecedores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const query = 'DELETE FROM fornecedores WHERE id = ?';
    connection.query(query, [id], (error, results, fields) => {
        if (error) {
            res.status(500).json({ message: "Erro ao remover fornecedor" });
            return;
        }
        res.json({ message: "Fornecedor removido com sucesso" });
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});