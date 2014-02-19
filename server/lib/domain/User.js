function User (attrs) {
  this._attrs = attrs || {};
}

User.prototype.authenticate = function(password) {
  return (this._attrs.password && this._attrs.password === password);
};

User.prototype.set = function(key, val) {
  this._attrs[key] = val;
};

User.prototype.get = function(key) {
  return this._attrs[key];
};

module.exports = User;








