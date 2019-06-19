const fs = require('fs-extra');

fs.copy('../ramda/ramda_test/data2018.json', 'testdata/data2018test.json', function(err){
  if (err) return console.error(err);
  console.log("success!")
});

// fs.copy('data2019.json', 'testdata/data2018test.json', function(err){
//   if (err) return console.error(err);
//   console.log("success!")
// });