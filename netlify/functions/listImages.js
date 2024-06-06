const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const category = event.queryStringParameters.category || 'CasaDaVilaI';
  const imagesDir = path.join(__dirname, '../../public/images', category);

  try {
    const files = fs.readdirSync(imagesDir);
    return {
      statusCode: 200,
      body: JSON.stringify(files),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to read images directory' }),
    };
  }
};