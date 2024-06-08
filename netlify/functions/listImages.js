const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const category = event.queryStringParameters.category || 'CasaDaVilaI';

  // Determine the correct path based on the environment
  const imagesDir = path.resolve(__dirname, process.env.NODE_ENV === 'production' ? '../../images' : '../images', category);

  console.log(`Category: ${category}`);
  console.log(`Images directory: ${imagesDir}`);

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