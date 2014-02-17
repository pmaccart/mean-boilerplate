'use strict';

var express = require('express'),
    api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app, config) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);
  
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
//  app.get('/*', middleware.setUserCookie, index.index);

  // If we hit this, something is wrong
  app.use(config.server.staticUrl, function(req, res) {
    return res.send(404);
  });

  // send the index file last
  app.all('/*', function(req, res) {
    res.sendfile('index.html', { root: config.server.distFolder });
  });
};