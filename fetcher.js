//NPM INIT NPM INSTALL REQUEST 

//Two arguments file path & URL
//Process.argv for index

//Store variables file path & URL

const fs = require('fs');
const request = require('request');

const uRl = process.argv[2];
const filePath = process.argv[3];
//console.log(uRl);

const fetchAndSave = function (url, localPath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error); 
      // Print the error if one occurred
      return;
    }
    //Utilize write file sync - compass exercise 
    fs.writeFile(localPath, body, err => {
      if (err) {
        //Make if condition to handle error from write file sync 
        console.error(err);
        return;
      } else {
        //Make desired result with console log 
        console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
      }
    });
  });      
};

if (!uRl || !filePath) {
  //Make if condition to grab error from request in callback
  console.log(`You are missing either the URL or File Path`);
} else {
  fetchAndSave(uRl, filePath);
};










