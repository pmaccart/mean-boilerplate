'use strict';

var express = require('express'),
    path = require('path'),
    config = require('./config'),
    passport = require('passport'),
    mongoStore = require('connect-mongo')(express),
    MemoryStore = express.session.MemoryStore;


/**
 * Express configuration
 */
module.exports = function(app) {
  app.configure('development', function(){
//    app.use(require('connect-livereload')());

    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });

//    app.use(express.static(path.join(config.root, '.tmp')));
//    app.use(express.static(path.join(config.root, 'app')));
    app.use(express.errorHandler());
    app.set('views', config.root + '/app/views');

    console.log('Configuring Express Sessions for dev');
    app.use(express.cookieParser());
    app.use(express.session({
      secret: config.server.sessionSecret,
      store: new mongoStore({
        url: config.mongo.uri,
        collection: 'sessions'
      }),
//      key: config.server.sessionCookieName,
      proxy: true
    }));

  });

  app.configure('production', function(){
    app.use(express.favicon(path.join(config.root, 'public', 'favicon.ico')));
//    app.use(express.static(path.join(config.root, 'public')));
    app.set('views', config.root + '/views');

    // Persist sessions with mongoStore
    console.log('Configuring Express Sessions.');
    app.use(express.cookieParser());
    app.use(express.session({
      secret: config.server.sessionSecret,
      store: new mongoStore({
        url: config.mongo.uri,
        collection: 'sessions'
      }),
//      key: config.server.sessionCookieName,
      proxy: true
    }));

  });

  app.configure(function(){
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
//    app.use(express.cookieParser());

    // Server static resources from the compiled client application folder (either build or dist,
    // depending on environment)
    app.use(config.server.staticUrl, express.compress());
    app.use(config.server.staticUrl, express.static(config.server.distFolder));

    //use passport session
    console.log('Configuring Passport auth module.');
    app.use(passport.initialize());
    app.use(passport.session());

    // Router needs to be last
    app.use(app.router);
  });
};