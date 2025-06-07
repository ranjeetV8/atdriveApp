// routes/products.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// CREATE
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
      [name, price, description]
    );
    res.send('Product added');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to add product');
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM products');
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch products');
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE products SET name=?, price=?, description=? WHERE id=?',
      [name, price, description, req.params.id]
    );
    res.send('Product updated');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to update product');
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query(
      'DELETE FROM products WHERE id=?',
      [req.params.id]
    );
    res.send('Product deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to delete product');
  }
});

module.exports = router;
