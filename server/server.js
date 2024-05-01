const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/images/:category', (req, res) => {
  const category = req.params.category;
  const directoryPath = path.join(__dirname, 'images', category);

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading directory' });
    }
    
    const images = files.map(file => ({
      src: `/images/${category}/${file}`,
      alt: `Image from ${category}`,
      category: category
    }));

    res.json(images);
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});