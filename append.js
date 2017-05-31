var fs = require('fs');

fs.appendFile('ukinode.txt', 'uki has 15 students & two teachers', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
