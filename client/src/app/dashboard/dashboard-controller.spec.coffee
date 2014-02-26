describe 'dashboard controller', ->
  beforeEach module 'dashboard.controllers'

  DashboardCtrl = null
  $scope = null
  $timeout = null

  accountInfo = 'Account Info'
  enrolledServices = ['Service 1', 'Service 2']
  currentBill = 'Current Bill'

  beforeEach inject ($controller,   $rootScope, $q, _$timeout_) ->
    $timeout = _$timeout_
    $scope = $rootScope.$new()

    accountService =
      getAccountInfo: jasmine.createSpy('getAccountInfo').and.returnValue $q.when accountInfo
      getEnrolledServices: jasmine.createSpy('getEnrolledServices').and.returnValue $q.when enrolledServices

    billingService =
      getCurrentBill: jasmine.createSpy('getCurrentBill').and.returnValue $q.when currentBill

    DashboardCtrl = $controller 'DashboardCtrl',
      $scope: $scope
      accountService: accountService
      billingService: billingService

  it 'should load the account and billing data', ->
    expect DashboardCtrl
    .toBeTruthy()

    # force pending promises to be resolved
    $timeout.flush()

    expect $scope.model.currentBill
    .toBe currentBill

    expect $scope.model.accountInfo
    .toBe accountInfo

    expect $scope.model.enrolledServices
    .toBe enrolledServices
