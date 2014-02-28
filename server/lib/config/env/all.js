'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  root: rootPath,
  port: process.env.PORT || 3000,
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },
  server: {
    port: process.env.PORT || 3000,
    staticUrl: '/static',
    distFolder: path.resolve(rootPath + '/../client/build'),
    sessionSecret: 'oursupersecretkey',
    sessionCookieName: 'MBP_TOKEN'
  }
};