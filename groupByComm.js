const fs = require('fs-extra');
const R = require('ramda');

// let content

fs.readFile('./testdata/data2018ltd.js', function read(err, data){
  if (err) throw err;
  
  let isComm = R.contains('BRENTWOOD', R.pluck('comm_name', data));

  if (isComm) {
    console.log('brentwood')
  }
  });
