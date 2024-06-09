const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const category = event.queryStringParameters.category || 'CasaDaVilaI';

  const imagesDir = path.join(__dirname, '..', '..', 'build', 'images', category);

  console.log(`Category: ${category}`);
  console.log(`Images directory: ${imagesDir}`);
  // Caminho da raiz do projeto
  const rootDir = path.join(__dirname, '..', '..');

  console.log(`Root directory: ${rootDir}`);
  const folders = fs.readdirSync(rootDir).filter(file => fs.statSync(path.join(rootDir, file)).isDirectory());
  console.log(`Folders in root directory: ${folders}`);

  try {
    const files = fs.readdirSync(imagesDir);
    console.log(`Files: ${files}`);
    return {
      statusCode: 200,
      body: JSON.stringify(files),
    };
  } catch (error) {
    console.error('Error reading images directory:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to read images directory', details: error.message }),
    };
  }
};