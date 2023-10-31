const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/card/:name', async (req, res) => {
  try {
    const cardName = req.params.name;
    const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro na solicitação:', error);
    res.status(500).json({ error: 'Erro na solicitação' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
