/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('slalomNgBoilerplate.home', [
    'ui.router'
  ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
  .config(function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          "main": {
            controller: 'HomeCtrl',
            templateUrl: 'home/home.tpl.html'
          }
        },
        data: { pageTitle: 'Home' }
      })
      .state('statement', {
        url: '/statement/:statementId',
        views: {
          "main": {
            controller: 'StatementCtrl',
            templateUrl: 'home/statement.tpl.html'
          }
        },
        data: { pageTitle: 'Statement' }
      });
  })

/**
 * And of course we define a controller for our route.
 */
  .controller('HomeCtrl', function HomeController($scope) {
    $scope.model = {
      statement: {
        id: "00001",
        accountNumber: "9123 14 83 0002323",
        amountDue: 423.12,
        date: new Date(2014, 1, 14),
        dueDate: new Date(2014, 2, 5)
      }
    };

  })

  .controller('StatementCtrl', function StatementController($scope) {
    $scope.model = {
      statement: {
        id: "00001",
        accountNumber: "9123 14 83 0002323",
        amountDue: 423.12,
        date: new Date(2014, 1, 14),
        dueDate: new Date(2014, 2, 5)
      }
    };

  })

;

