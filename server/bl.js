const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Altere o código do lado do servidor para enviar objetos com src e alt
app.get('/images/:category', (req, res) => {
    const category = req.params.category;
    const directoryPath = path.join(__dirname, 'images', category);
  
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return res.status(500).json({ error: 'Error reading directory' });
      }
      
      const images = files.map(file => ({
        src: `/images/${category}/${file}`,
        alt: `Image from ${category}`,
        category: category
      }));
  
      res.json(images); // Enviar os dados como JSON
    });
});
  

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});