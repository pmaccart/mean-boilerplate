describe('AppCtrl', function() {
  describe('isCurrentUrl from coffeescript', function() {
    var AppCtrl = null,
      $location = null,
      $scope = null;

    beforeEach(module('sample'));

    beforeEach(inject(function ($controller, _$location_, $rootScope) {
      $location = _$location_;
      $scope = $rootScope.$new();
      AppCtrl = $controller('AppCtrl', {
        $location: $location,
        $scope: $scope
      });
    }));


    it('should find the AppCtrl controller', function() {
      expect(AppCtrl).toBeTruthy();
    });


    it('should set the page title on a successful state change', function() {
      expect($scope.pageTitle).not.toBeDefined();

      $scope.$emit('$stateChangeSuccess', {
        data: {
          pageTitle: 'Page Title'
        }
      });

      expect($scope.pageTitle).toBe('Page Title | Sample App');
    });
  });

});





