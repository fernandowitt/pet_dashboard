import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Rotas básicas
app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
