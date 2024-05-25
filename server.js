const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'build')));

app.get('/images/:category', (req, res) => {
  const category = req.params.category;
  const categoryPath = path.join(__dirname, 'public/images', category);

  fs.readdir(categoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('Error reading directory');
    }

    res.json(files);
  });
});

// Serve the React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});