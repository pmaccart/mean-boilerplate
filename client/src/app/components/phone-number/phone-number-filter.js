angular.module('filters.phoneNumber', [])
  .filter('phoneNumber', function() {
    return function(input) {
      if (input.length === 10) {
        return "1 (" + input.substr(0, 3) + ") " + input.substr(3, 3) + "-" + input.substr(6, 10);
      }
    };
  });
