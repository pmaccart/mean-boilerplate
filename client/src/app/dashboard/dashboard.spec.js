/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'home section', function() {
  beforeEach( module( 'dashboard' ) );

  var DashboardCtrl, $scope;
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    DashboardCtrl = $controller('DashboardCtrl', {
      $scope: $scope,
      billingService: { getCurrentBill: function() { return {then:function(){}}; }}
    });
  }));

//  it( 'should have a dummy test', inject( function() {
//    expect( DashboardCtrl ).toBeTruthy();
//    expect($scope.model.currentBill).toBeDefined();
//  }));
});

