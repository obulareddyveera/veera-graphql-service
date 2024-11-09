const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express on Veera!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'This is the API endpoint!' });
});

module.exports = app;