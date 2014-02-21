angular.module('login', [
    'ui.router',
    'login.controllers'
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
  });