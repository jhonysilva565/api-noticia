const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger/swaggerConfig');
const newsRoutes = require('./routes/Routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/noticia');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/news', newsRoutes);

app.get('/', (req, res) => {
  res.send('API de Notícias funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
