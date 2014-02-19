var _ = require('lodash'),
  User = require('../domain/User'),
  mockUserData = require('./mockUserData');


function generateId() {
  return Math.floor(Math.random() * 1000000);
}

function InMemoryUserRepository() {
  var store = this._store = {};
  mockUserData.forEach(function(userAttrs) {
    var id = generateId();
    userAttrs.id = userAttrs._id = id;

    var user = new User(userAttrs);

    store[id] = user;
  });
}


InMemoryUserRepository.prototype.findOne = function(params, callback) {
  // find the first user in the store where all the values match the provided params object
  var user = _.find(this._store, function(user) {
    return _.every(_.keys(params), function(key) {
      return user.get(key) === params[key];
    });
  });
  console.log('Found user', user);
  callback(null, user);
};

InMemoryUserRepository.prototype.save = function(user, callback) {
  var id;
  while (!user.get('_id')) {
    id = generateId();
    if (!this._store[id]) {
      user.set('_id', id);
      user.set('id', id);
    }
  }

  this._store[user._id] = user;
  callback(null, user);
};

module.exports = InMemoryUserRepository;