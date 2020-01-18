const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    /*Returns current directory from where the process is started*/
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    /*Returns true if the file path exists while the application runs*/
    return fs.existsSync(filePath);
  }
};
