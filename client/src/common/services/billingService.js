angular.module('services.billing', [])
.factory('billingService', function($q, $timeout) {
    return {
      getBillDetails:function(id) {
        var deferred = $q.defer();
        $timeout(function() {
          deferred.resolve({
            id: id,
            accountNumber: '1422 24 1242332',
            statementDate: new Date(2014, 1, 25),
            dueDate: new Date(2014, 2, 15),
            previousBalance: 512.42,
            paymentsReceived: 512.42,
            remainingBalance: 0,
            newCharges: 514.23,
            statementCycle: {
              start: new Date(2014, 2, 1),
              end: new Date(2014, 2, 31)
            }
          });
        }, 100);


        return deferred.promise;
      },

      getCurrentBill:function() {
        var deferred = $q.defer();

        $timeout(function() {
          deferred.resolve({
            id: '123123',
            accountNumber: '1422 24 1242332',
            statementDate: new Date(2014, 1, 25),
            dueDate: new Date(2014, 2, 15),
            previousBalance: 512.42,
            paymentsReceived: 512.42,
            remainingBalance: 0,
            newCharges: 514.23,
            statementCycle: {
              start: new Date(2014, 2, 1),
              end: new Date(2014, 2, 31)
            }
          });
        }, 100);

        return deferred.promise;
      }
    };
  });