'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    UserRepository = require('../repositories/UserRepository'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

/**
 * Passport configuration
 */
module.exports = function() {
  passport.serializeUser(function(user, done) {
    console.log('Serializing user with id %s', user.get('_id'));
    done(null, user.get('_id'));
  });
  passport.deserializeUser(function(id, done) {
    console.log('Finding user with id %s', id);
    UserRepository.findOne({
      _id: id
    }, function(err, user) { // don't ever give out the password or salt
      console.log('Found user to deserialize.', err, user);
      done(err, user);
    });
  });

  // add other strategies for more authentication flexibility
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(email, password, done) {

      console.log('Authorizing user i think...', email, password);
      UserRepository.findOne({
        email: email
      }, function(err, user) {
        if (err) return done(err);
        
        if (!user) {
          return done(null, false, {
            message: 'This email is not registered.'
          });
        }
        if (!user.authenticate(password)) {
          return done(null, false, {
            message: 'This password is not correct.'
          });
        }
        console.log('User authorized.', user.get('email'));
        return done(null, user);
      });
    }
  ));
};