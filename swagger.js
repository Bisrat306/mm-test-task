const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Monday.com Event Logger',
      version: '1.0.0',
      description: 'API documentation for monday.com event logger',
    },
  },
  // Path to the API specs
  apis: ['./routes/api/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
    swaggerSpec,
    swaggerUi,
  };