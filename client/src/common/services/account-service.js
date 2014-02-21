angular.module('services.account', [])
  .factory('accountService', function($q, $timeout) {
    return {

      getAccountInfo:function() {
        var deferred = $q.defer();

        $timeout(function() {
          deferred.resolve({
            accountNumber: '8211 88 624 0000444',
            name: 'PRATT & ASSOCIATES',
            address1: 'ATTN: ACCOUNTING',
            address2: '12 E Ohio St',
            address3: null,
            city: 'Chicago',
            state: 'IL',
            zip: '60601',
            phone: '13125555555'
          });
        });

        return deferred.promise;
      },

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