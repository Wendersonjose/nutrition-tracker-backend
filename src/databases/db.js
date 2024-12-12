const { Client } = require('pg');

const client = new Client({
  host: 'localhost',  // O banco de dados está rodando no contêiner do PostgreSQL
  port: 5432,         // A porta padrão do PostgreSQL
  user: 'user',       // O usuário configurado no Docker
  password: 'password', // A senha configurada no Docker
  database: 'nutritiondb', // O nome do banco de dados
});

client.connect()
  .then(() => console.log('Conectado ao PostgreSQL'))
  .catch(err => console.error('Erro ao conectar ao banco de dados', err));
