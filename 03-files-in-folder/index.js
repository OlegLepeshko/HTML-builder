const fs = require('fs');
const path = require('path');

const getCalc = async ()  => {
  try {
    let fileNames = [];
    let fileSizes = [];
    const files = await fs.promises.readdir(path.resolve(__dirname, 'secret-folder'), {withFileTypes: true});
    for (const file of files) {
      if (!file.isDirectory()) {
        fileNames.push(file.name);
        fs.stat(path.resolve(__dirname, 'secret-folder', file.name), (error, stats) => {
          console.log(`${file.name} - ${stats.size}b`);
          fileSizes.push(stats.size);
        });
      }
    }
    return (fileNames, fileSizes);
     
  } catch (err) {
    console.error(err);
  }
};

getCalc();