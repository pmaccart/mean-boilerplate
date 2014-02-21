angular.module('data.billing', [])
  .value('currentBill', {
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