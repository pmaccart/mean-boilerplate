angular.module('sample', [
    'templates-app',
    'templates-common',
    'templates-jade_app',
    'templates-jade_common',
    'dashboard',
    'login',
    'billing',
    'ui.router'
  ])

  .config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  })

  .run(function run() {
  })

  .controller('AppCtrl', function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (angular.isDefined(toState.data.pageTitle)) {
        $scope.pageTitle = toState.data.pageTitle + ' | Sample App';
      }
    });
  })

;

