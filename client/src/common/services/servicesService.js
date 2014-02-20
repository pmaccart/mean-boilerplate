angular.module('services.services', [])
.factory('servicesService', function($q, $timeout) {
    return {
      getEnrolledServices:function() {
        var deferred = $q.defer();

        $timeout(function() {
          deferred.resolve([
            { name: 'Internet', type: 'Pro50', id: ''},
            { name: 'Voice', type: 'Advanced Pack',  id: ''},
            { name: 'TV', type: 'Public View TV', id: ''},
            { name: 'Backup', type: '100GB Package', id: ''},
            { name: 'Desktop Security', type: '10 Licenses', id: ''},
            { name: 'Hosting', type: 'Custom Hosting Basic', id: ''},
            { name: 'Email', type: '10 Basic Mailboxes', id: ''}
          ]);
        }, 100);

        return deferred.promise;
      }
    };
  });