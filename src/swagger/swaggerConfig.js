const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Notícias',
      version: '1.0.0',
      description: 'Uma API para gerenciar notícias',
    },
  },
  apis: ['./src/routes/Routes.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = swaggerDocs;
