const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Rota para buscar imagens
app.get('/images/:category', (req, res) => {
  const category = req.params.category;
  const directoryPath = path.join(__dirname, 'public', 'images', category);

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory');
    }

    // Filtra apenas arquivos de imagem (opcional)
    const imageFiles = files.filter(file => /\.(jpe?g|png|gif|svg)$/i.test(file));

    res.json(imageFiles);
  });
});

// Rota para lidar com todas as outras requisições e servir o HTML
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});