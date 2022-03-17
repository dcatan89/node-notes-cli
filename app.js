const fs = require('fs');
const json = require('./data.json');
const action = process.argv[2];
const note = process.argv[3];
const update = process.argv[4];
const read = JSON.stringify(json, null, 2);

if (action === 'read') {
  console.log(read);
} else if (action === 'add') {
  json.notes[json.nextId++] = note;
  fs.writeFile('data.json', `${JSON.stringify(json, null, 2)
}`, 'utf8', err => {
    if (err) throw err;
  });
} else if (action === 'update') {
  json.notes[note] = update;
  fs.writeFile('data.json', `${JSON.stringify(json, null, 2)
}`, 'utf8', err => {
    if (err) throw err;
  });
}
