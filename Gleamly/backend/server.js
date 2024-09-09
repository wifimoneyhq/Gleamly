const express = require('express');
const connection = require('./database'); // Import the database connection

const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); // This line is crucial for parsing JSON bodies

// GET route to retrieve all entries from some_table
app.get('/', (req, res) => {
  connection.query('SELECT * FROM some_table', (error, results) => {
    if (error) {
      res.status(500).send('Error querying the database');
    } else {
      res.json(results);
    }
  });
});

// POST route to add new data to some_table
app.post('/add', (req, res) => {
  const { name } = req.body;
  connection.query('INSERT INTO some_table (name) VALUES (?)', [name], (error, results) => {
    if (error) {
      console.error('Database insert error: ', error.stack);
      res.status(500).json({ error: 'Database insert failed' });
    } else {
      res.status(201).json({ id: results.insertId, name });
    }
  });
});

// GET route to retrieve a single entry by ID from some_table
app.get('/item/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM some_table WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).send('Error querying the database');
    } else if (results.length === 0) {
      res.status(404).send('Item not found');
    } else {
      res.json(results[0]);
    }
  });
});

// PUT route to update an existing entry in some_table by ID
app.put('/item/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  connection.query('UPDATE some_table SET name = ? WHERE id = ?', [name, id], (error, results) => {
    if (error) {
      res.status(500).send('Error updating the database');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Item not found');
    } else {
      res.json({ id, name });
    }
  });
});

// DELETE route to remove an entry from some_table by ID
app.delete('/item/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM some_table WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).send('Error deleting from the database');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Item not found');
    } else {
      res.sendStatus(204);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});