angular.module('services.account', [
    'data.account'
  ])
  .factory('accountService', function ($q, $timeout, accountInfo, enrolledServices) {
    return {

      getAccountInfo: function () {
        var deferred = $q.defer();

        $timeout(function () {
          deferred.resolve(accountInfo);
        });

        return deferred.promise;
      },

      getEnrolledServices: function () {
        var deferred = $q.defer();

        $timeout(function () {
          deferred.resolve(enrolledServices);
        }, 100);

        return deferred.promise;
      }
    };
  });