const fs = require('fs-extra');
const R = require('ramda');

try {
  const data = fs.readFile('./testdata/data2018xxxsmall.js');
  // console.log(data.length);
  // console.log(R.find(R.propEq('comm_code', 'RED'))(data));
  console.log(R.pluck('comm_code', data));

} catch (err) {
  console.error(err)
}