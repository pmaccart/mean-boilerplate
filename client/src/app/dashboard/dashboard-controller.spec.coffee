describe 'dashboard controller', ->
  beforeEach module 'dashboard.controllers'

  DashboardCtrl = null
  $scope = null
  $timeout = null

  beforeEach inject ($controller,   $rootScope, $q, _$timeout_) ->
    $timeout = _$timeout_
    $scope = $rootScope.$new()

    accountInfo = 'Account Info'
    enrolledServices = ['Service 1', 'Service 2']
    accountService =
      getAccountInfo: jasmine.createSpy('getAccountInfo').and.returnValue $q.when accountInfo
      getEnrolledServices: jasmine.createSpy('getEnrolledServices').and.returnValue $q.when enrolledServices

    currentBill = 'Current Bill'
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
    .toBe 'Current Bill'

    expect $scope.model.accountInfo
    .toBe 'Account Info'

    expect $scope.model.enrolledServices
    .toEqual ['Service 1', 'Service 2']
