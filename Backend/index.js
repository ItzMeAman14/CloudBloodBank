const express = require('express');
const db = require('./config');
const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
  
  res.send('Hello, Express!');
});


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});