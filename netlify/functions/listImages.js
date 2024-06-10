const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const category = event.queryStringParameters.category || 'CasaDaVilaI';

  try {
    const imagesDir = path.join('public', 'images', category);
    console.log('Trying to access directory:', imagesDir); // Add this line
    const files = fs.readdirSync(imagesDir);
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
};