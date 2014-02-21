angular.module('dashboard.controllers', [
    'ui.router',
    'services.account',
    'services.billing'
  ])
  .controller('DashboardCtrl', function HomeController($scope, accountService, billingService) {
    $scope.model = {};

    accountService.getAccountInfo().then(function (accountInfo) {
      $scope.model.accountInfo = accountInfo;
    });

    billingService.getCurrentBill().then(function (currentBill) {
      $scope.model.currentBill = currentBill;
    });

    accountService.getEnrolledServices().then(function (enrolledServices) {
      $scope.model.enrolledServices = enrolledServices;
    });
  });