const fs = require('fs');
const json = require('./data.json');
const action = process.argv[2];
const note = process.argv[3];
let { nextEntryId: nextEntryId } = jason.notes;
nextEntryId = json.nextId;

if (action === 'read') {
  console.log(data);
} else if (action === 'add') {
  json.notes.nextEntryId = note;
  json.nextId++;
  const data = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', `${data}`, 'utf8', err => {
    if (err) throw err;
  })
}
