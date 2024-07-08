const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log('testing app');
  res.send('<h1>Home Page</h1><p>Vercel test</p>');
});

app.get('/datetime', (req, res) => {
  const today = new Date().toISOString();
  const mistr = `<h3>Solicitud realizada:</h3><p>${today}<p>`;
  
  res.send(mistr);
});

module.exports = app;