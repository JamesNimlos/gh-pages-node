const fs = require('fs');

module.exports = function (dir) {
  try {
    fs.statSync(dir);
  } 
  catch (e) {
    return false;
  }
  
  return true;
};