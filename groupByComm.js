const fs = require('fs-extra');
const R = require('ramda');

// let content

fs.readFile('./testdata/data2018test.json', function read(err, data){
  if (err) throw err;
  let content = data;
  console.log(content.length)
});
