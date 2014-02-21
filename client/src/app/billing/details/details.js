angular.module('billing.details', [
    'ui.router',
    'billing.details.controllers'
  ])
  .config(function config($stateProvider) {
    $stateProvider
      .state('billing.details', {
        url: '/billing/:id/details',
        views: {
          main: {
            controller: 'BillingCtrl',
            templateUrl: 'billing/details/details.tpl.html'
          }
        },
        data: { pageTitle: 'Billing Details' }
      });
  });