exports.handler = async (event, context) => {
  const fs = require('fs');
  const path = require('path');

  try {
    // Utilize o __dirname para construir o caminho absoluto corretamente
    const directoryPath = path.join('public', 'images', 'CasadaVilaI');
    
    const files = fs.readdirSync(directoryPath);
    
    return {
      statusCode: 200,
      body: JSON.stringify(files),
    };
  } catch (error) {
    console.error('Error reading directory:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        errorType: error.name,
        errorMessage: error.message,
      }),
    };
  }
};


/*const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const category = event.queryStringParameters.category || 'CasaDaVilaI';

  // Caminho da raiz do projeto
  const rootDir = path.join('__dirname');

  console.log(`Category: ${category}`);
  console.log(`Root directory: ${rootDir}`);
  // Listar as pastas na raiz do projeto
  const folders = fs.readdirSync(rootDir).filter(file => fs.statSync(path.join(rootDir, file)).isDirectory());
  console.log(`Folders in root directory: ${folders}`);

  try {
    // Caminho da pasta de imagens
    const imagesDir = path.join(rootDir, 'images', category);
    console.log(`Images directory: ${imagesDir}`);

    const files = fs.readdirSync(imagesDir);
    console.log(`Files: ${files}`);
    return {
      statusCode: 200,
      body: JSON.stringify(files),
    };
  } catch (error) {
    console.error('Error reading directory:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to read directory', details: error.message }),
    };
  }
}; */