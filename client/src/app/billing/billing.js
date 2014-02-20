angular.module('slalomNgBoilerplate.billing', [
'ui.router'])
.config(function config($stateProvider) {
    $stateProvider
      .state('billing', {
        url: '/billing',
        views: {
          main: {
            controller: 'BillingCtrl',
            templateUrl: 'billing/billing.tpl.html'
          }
        },
        data: { pageTitle: 'Billing' }
      });
  })
.controller('BillingCtrl', function ($scope, $state) {

  });