var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initRunner = function(files) {
  console.log('initRunner')
  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(__dirname + '/script.js'));
  files.unshift(createPattern(__dirname + '/2NM1dsdOx8Ioc7cT_94Adw.html'));
};
console.log('sdsds');
initRunner.$inject = ['config.files'];

module.exports = {
  'framework:karma-basisjs-test-runner': ['factory', initRunner]
};
