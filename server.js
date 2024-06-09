const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'build' folder (React application)
app.use(express.static(path.join(__dirname, 'build')));

// Serve images from the 'images' folder (outside of 'build')
app.use('/images', express.static(path.join(__dirname, 'images')));

// Rota para buscar imagens por categoria (optional)
// If you don't need to filter images by category, remove this route
app.get('/images/:category', (req, res) => {
  const category = req.params.category;
  const imagePath = path.join(__dirname, 'images', category); // Adjust path as needed

  // Implement logic to fetch and send image data based on category (optional)
  // ...

  // Example: Send a generic response if category-based filtering is not implemented
  res.json({ message: 'Image category filtering not implemented.' });
});

// Rota para lidar com todas as outras requisições e servir o HTML
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});