// server/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
