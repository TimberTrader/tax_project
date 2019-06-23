const fs = require('fs-extra');
const R = require('ramda');

try {
  const data = fs.readFile('./testdata/data2018xxxsmall.js')
  // console.log(data.length)
  // console.log(R.find(R.propEq('comm_name', 'WEST SPRINGS'))(data));
  console.log(R.pluck('comm_code', data));

} catch (err) {
  console.error(err)
}

// fs.readFileSync('./testdata/data2018ltd.js', function read(err, data){
//   if (err) throw err;
//   console.log(R.find(R.propEq('comm_name', 'BRENTWWOD'))(data));
  
//   // let isComm = R.contains('BRENTWOOD', R.pluck('comm_name', data));
//   // if (isComm) {
//   //   console.log('brentwood')
//   // }
  
// });
