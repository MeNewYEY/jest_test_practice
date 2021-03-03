const fs = require('fs');
const path = require('path');
var rewire = require("rewire");


const app = rewire("./app.js");


const richClientsBalances = app.__get__('richClientsBalances');

test('The function returns an array', function () {
    const car = [
        { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
        { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
        { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    ];
    const result = richClientsBalances(car);
    expect(Array.isArray(result)).toBe(true);
});


test('The array must not be empty', function () {
    const car = [
        { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
        { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
        { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    ];
    const result = richClientsBalances(car);
    expect(result.length > 0).toBe(true);
});

test('Array sorted decreasingly with balances of clients>$25k', function () {

    const car = [
        { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
        { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
        { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    ];
    const car2 = [
        { id: 2, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
        { id: 44, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
        { id: 56, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    ];

    const accounts = [
  { clientId: 1, bankId: 1, balance: 10000 },
  { clientId: 1, bankId: 3, balance: 2 },
  { clientId: 5, bankId: 2, balance: 20000 },
  { clientId: 5, bankId: 2, balance: 50000 },
  { clientId: 5, bankId: 1, balance: 15 },
  { clientId: 4, bankId: 1, balance: 5 },  
  { clientId: 4, bankId: 3, balance: 3 },
  { clientId: 4, bankId: 1, balance: 45000 },
  { clientId: 4, bankId: 3, balance: 2 }
];

const accounts2 = [
  { clientId: 2, bankId: 2, balance: 12000 },
  { clientId: 2, bankId: 2, balance: 15000 },
  { clientId: 56, bankId: 3, balance: 20 },
  { clientId: 56, bankId: 2, balance: 5000 },
  { clientId: 56, bankId: 1, balance: 5 },
  { clientId: 56, bankId: 2, balance: 50000 },
  { clientId: 44, bankId: 3, balance: 3 },
  { clientId: 44, bankId: 3, balance: 10 },
  { clientId: 44, bankId: 3, balance: 4 }
];

    const result = richClientsBalances(car,accounts,1);
    const result2 = richClientsBalances(car2,accounts2,2);
    expect(result).toEqual([45005]);
    expect(result2).toEqual([55000,27000]);
});


