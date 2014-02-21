angular.module('login.controllers', ['ui.router'])
  .controller('LoginCtrl', function ($scope, $state, $http, $log) {
    $scope.model = {};

    $scope.doLogin = function (user) {
      $http({
        method: 'POST',
        url: '/api/session',
        data: user
      })
        .success(function (data) {
          $log.debug('Succesfully logged in', data);
          $state.go('dashboard');
        })
        .error(function (data) {
          $log.debug('Error logging in', data);
        });
    };
  })
  .controller('RegistrationCtrl', function ($scope, $state, $http, $log) {
    $scope.model = {};

    $scope.registerUser = function (user) {
      $http({
        method: 'POST',
        url: '/api/users',
        data: user
      })
        .success(function (data) {
          $log.debug('Successfully registered.', data);
          $state.go('home');
        })
        .error(function (data) {
          $log.debug('Error registering', data);
        });
    };
  });