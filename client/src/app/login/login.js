angular.module('slalomNgBoilerplate.login', [
    'ui.router'
  ])
  .config(function config($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        views: {
          'main': {
            controller: 'LoginCtrl',
            templateUrl: 'login/login.tpl.html'
          }
        },
        data: {pageTitle: 'Login'}
      })
      .state('register', {
        url: '/register',
        views: {
          'main': {
            controller: 'RegistrationCtrl',
            templateUrl: 'login/register.tpl.html'
          }
        },
        data: {pageTitle: 'Register'}
      });
  })
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
          $state.go('home');
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