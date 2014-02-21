angular.module('billing', [
    'ui.router',
    'billing.controllers'
  ])
  .config(function config($stateProvider) {
    $stateProvider
      .state('billing', {
        url: '/billing',
        views: {
          main: {
            controller: 'BillingCtrl',
            templateUrl: 'billing/billing-template.html'
          }
        },
        data: { pageTitle: 'Billing' }
      });
  });