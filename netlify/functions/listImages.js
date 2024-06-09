const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const category = event.queryStringParameters.category || 'CasaDaVilaI';

  const baseDir = path.join(__dirname, '..', '..', 'build', 'images');
  const imagesDir = path.join(baseDir, category);

  console.log(`Category: ${category}`);
  console.log(`Images directory: ${imagesDir}`);

  try {
    // Listar todas as pastas no diretório de imagens
    const folders = fs.readdirSync(baseDir).filter(file => fs.statSync(path.join(baseDir, file)).isDirectory());
    console.log(`Available folders: ${folders}`);

    // Listar os arquivos na pasta da categoria específica
    const files = fs.readdirSync(imagesDir);
    console.log(`Files: ${files}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        availableFolders: folders,
        files: files,
      }),
    };
  } catch (error) {
    console.error('Error reading images directory:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to read images directory', details: error.message }),
    };
  }
};