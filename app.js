const fs = require('fs');
const json = require('./data.json');

const action = process.argv[2];

if (action === 'read') {
  console.log(JSON.stringify(json, null, 2));
}
