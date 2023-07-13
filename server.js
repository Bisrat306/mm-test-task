require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDB = require('./config/db');
const { swaggerSpec, swaggerUi } = require("./swagger");

const PORT = process.env.PORT || 6000;

const app = express();

// MongoDB Connection
connectDB();

// Body Parser Middleware
app.use(bodyParser.json());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/register', require('./routes/api/event'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});