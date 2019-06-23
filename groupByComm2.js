const fs = require('fs-extra');
const R = require('ramda');

fs.read('./testdata/data2018ltd.js', function read(err, data){
  if (err) throw err;
  
  // let comms = R.find(R.propEq('comm_name', 'BRENTWWOD'))(data);
  console.log(data)
  });