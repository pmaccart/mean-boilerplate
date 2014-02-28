'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://localhost/mean-boilerplate'
  },
  server: {
    distFolder: path.resolve(rootPath + '/../client/dist')
  }
};