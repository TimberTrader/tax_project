const request = require('request');
const fs = require('fs-extra');

const resourceIDMap = {
  prop_assess_val: '6zp6-pxei'
}

function apiCall(resourceID, callBack) {
  let options = {
    url: `https://data.calgary.ca/resource/${resourceIDMap[resourceID]}.json?$Limit=50000&assessment_class=RE&roll_year=2018`,
    headers: {
      'User-Agent': 'request',
      'X-App-Token': 'TuumEdQ9KIehmtGnn2QjJoes7'
    }
  };
  request(options, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    let dataObj = JSON.parse(body);
    console.log(dataObj.length);
    fs.writeJson('./testdata/data2018ltd.js', {dataObj}, err => {
      if (err) return console.error(err)
    
      console.log('success!')
    })
  });
}

apiCall('prop_assess_val')