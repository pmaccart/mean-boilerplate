angular.module 'sample', [
  'templates-app',
  'templates-common',
  'templates-jade_app',
  'templates-jade_common',
  'dashboard',
  'login',
  'billing',
  'header',
  'ui.router',
  'ui.bootstrap'
]
.config ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider.otherwise '/dashboard'
.run -> {}
.controller 'AppCtrl', ($scope, $location) ->
  $scope.$on '$stateChangeSuccess', (event, toState, toParmas,
                                    fromState, fromParams) ->
    $scope.pageTitle = toState.data.pageTitle +
      ' | Sample App' if angular.isDefined toState.data.pageTitle
