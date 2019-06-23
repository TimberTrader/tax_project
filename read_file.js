const fs = require('fs-extra');


fs.readFile('./testdata/data2018ltd.js', function read(err, data){
  if (err) throw err;
  console.log(data.length);
});

// // With a callback:
// fs.readJson('./testdata/data2019test.json', (err, packageObj) => {
//   if (err) console.error(err)

//   console.log(packageObj.length) // => 0.1.3
// })

// // With Promises:
// fs.readJson('./package.json')
// .then(packageObj => {
//   console.log(packageObj.version) // => 0.1.3
// })
// .catch(err => {
//   console.error(err)
// })

// // With async/await:
// async function example () {
//   try {
//     const packageObj = await fs.readJson('testdata/data2019test.json')
//     console.log(packageObj.length)
//   } catch (err) {
//     console.error(err)
//   }
// }

// example()
