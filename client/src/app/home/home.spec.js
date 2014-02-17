/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'home section', function() {
  beforeEach( module( 'slalomNgBoilerplate.home' ) );

  var HomeCtrl, $scope;
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {$scope: $scope});
  }));

  it( 'should have a dummy test', inject( function() {
    expect( HomeCtrl ).toBeTruthy();
    expect($scope.model.statement).toBeDefined();
    expect($scope.model.statement.id).toBeDefined();
  }));
});

