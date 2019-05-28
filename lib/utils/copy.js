const fs = require('fs');
const path = require('path');

module.exports = function copy(src, dest) {
  const paths = fs.readdirSync(src);
  paths.forEach((p) => {
    const _src = path.resolve(src, p);
    const _dest = path.resolve(dest, p);
    try {
      const stats = fs.statSync(_src);

      if (stats.isFile()) {
        fs.createReadStream(_src).pipe(fs.createWriteStream(_dest));

      } else if (stats.isDirectory() && p !== 'node_modules') {
        fs.access(_dest, fs.constants.F_OK, (err) => { // _dest是否存在

          if(err){
            fs.mkdirSync(_dest);
          }

          copy(_src, _dest);

        });
      }
    } catch (err) {
      if (err) {
        console.log(err);
        return false;
      }
    }
  });
}
