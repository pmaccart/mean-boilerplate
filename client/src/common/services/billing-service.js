angular.module('services.billing', [
  'data.billing'])
.factory('billingService', function($q, $timeout, currentBill) {
    return {

      getCurrentBill:function() {
        var deferred = $q.defer();

        $timeout(function() {
          deferred.resolve(currentBill);
        }, 100);

        return deferred.promise;
      }
    };
  });