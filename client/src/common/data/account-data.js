angular.module('data.account', [])
  .value('accountInfo', {
    accountNumber: '8211 88 624 0000444',
    name: 'PRATT & ASSOCIATES',
    address1: 'ATTN: ACCOUNTING',
    address2: '12 E Ohio St',
    address3: null,
    city: 'Chicago',
    state: 'IL',
    zip: '60601',
    phone: '13125555555'
  })
  .value('enrolledServices', [
    { name: 'Internet', type: 'Pro50', id: ''},
    { name: 'Voice', type: 'Advanced Pack', id: ''},
    { name: 'TV', type: 'Public View TV', id: ''},
    { name: 'Backup', type: '100GB Package', id: ''},
    { name: 'Desktop Security', type: '10 Licenses', id: ''},
    { name: 'Hosting', type: 'Custom Hosting Basic', id: ''},
    { name: 'Email', type: '10 Basic Mailboxes', id: ''}
  ]);