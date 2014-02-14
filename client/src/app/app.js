angular.module( 'slalomNgBoilerplate', [
  'templates-app',
  'templates-common',
  'templates-jade_app',
  'templates-jade_common',
  'slalomNgBoilerplate.home',
  'slalomNgBoilerplate.about',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Slalom ngBoilerplate' ;
    }
  });
})

;

