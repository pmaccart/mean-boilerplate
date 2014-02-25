angular.module 'dashboard.controllers', [
  'ui.router',
  'services.account',
  'services.billing'
]
.controller 'DashboardCtrl', ($scope, accountService, billingService) ->
  $scope.model =
    accountInfo: null
    currentBill: null
    enrolledServices: null

  accountService.getAccountInfo().then (accountInfo) ->
    $scope.model.accountInfo = accountInfo

  billingService.getCurrentBill().then (currentBill) ->
    $scope.model.currentBill = currentBill

  accountService.getEnrolledServices().then (enrolledServices) ->
    $scope.model.enrolledServices = enrolledServices


