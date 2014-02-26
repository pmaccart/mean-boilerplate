angular.module('dashboard', [
    'ui.router',
    'dashboard.controllers'
  ])
  .config(function config($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          "main": {
            controller: 'DashboardCtrl',
            templateUrl: 'dashboard/dashboard-template.html'
          }
        },
        data: { pageTitle: 'Dashboard' }
      });
  });

