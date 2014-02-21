angular.module('header.controller', [])
  .controller('HeaderCtrl', function ($scope) {
    $scope.user = {
      username: 'pmaccart',
      firstName: 'Phil',
      lastName: 'MacCart'
    };
  });