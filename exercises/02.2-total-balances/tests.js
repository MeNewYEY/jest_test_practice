const fs = require('fs');
const path = require('path');
var rewire = require("rewire");

const app = rewire("./app.js");


const sortClientsTotalBalances = app.__get__('sortClientsTotalBalances');

test('The function returns an array', function () {
     const accounts = [
  { clientId: 1, bankId: 1, balance: 2 },
  { clientId: 1, bankId: 3, balance: 2 },
  { clientId: 5, bankId: 3, balance: 20 },
  { clientId: 5, bankId: 2, balance: 15 },
  { clientId: 4, bankId: 1, balance: 5 },
  { clientId: 5, bankId: 2, balance: 5 },
  { clientId: 1, bankId: 3, balance: 3 },
  { clientId: 4, bankId: 3, balance: 10 },
  { clientId: 4, bankId: 3, balance: 4 }
];
    const car = [
        { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
        { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
        { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    ];
    const result = sortClientsTotalBalances(car,accounts);
    expect(Array.isArray(result)).toBe(true);
});

test('The array must not be empty', function () {
     const accounts = [
  { clientId: 1, bankId: 1, balance: 2 },
  { clientId: 1, bankId: 3, balance: 2 },
  { clientId: 5, bankId: 3, balance: 20 },
  { clientId: 5, bankId: 2, balance: 15 },
  { clientId: 4, bankId: 1, balance: 5 },
  { clientId: 5, bankId: 2, balance: 5 },
  { clientId: 1, bankId: 3, balance: 3 },
  { clientId: 4, bankId: 3, balance: 10 },
  { clientId: 4, bankId: 3, balance: 4 }
];
    const car = [
        { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
        { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
        { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    ];
    const result = sortClientsTotalBalances(car,accounts);
    expect(result.length > 0).toBe(true);
});

test('Check array with name sort by total balance', function () {    

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
  { clientId: 1, bankId: 1, balance: 2 },
  { clientId: 1, bankId: 3, balance: 2 },
  { clientId: 5, bankId: 3, balance: 20 },
  { clientId: 5, bankId: 2, balance: 15 },
  { clientId: 4, bankId: 1, balance: 5 },
  { clientId: 5, bankId: 2, balance: 5 },
  { clientId: 1, bankId: 3, balance: 3 },
  { clientId: 4, bankId: 3, balance: 10 },
  { clientId: 4, bankId: 3, balance: 4 }
];

const accounts2 = [
  { clientId: 2, bankId: 1, balance: 10 },
  { clientId: 2, bankId: 3, balance: 15 },
  { clientId: 56, bankId: 3, balance: 20 },
  { clientId: 56, bankId: 2, balance: 15 },
  { clientId: 44, bankId: 1, balance: 5 },
  { clientId: 56, bankId: 2, balance: 5 },
  { clientId: 2, bankId: 3, balance: 3 },
  { clientId: 44, bankId: 3, balance: 10 },
  { clientId: 44, bankId: 3, balance: 4 }
];
    const result = sortClientsTotalBalances(car,accounts);
    const result2 = sortClientsTotalBalances(car2,accounts2);
   
    
    expect(result).toEqual(['VICTOR MANUEL ROJAS LUCAS','SALVADOR ARNEDO MANRIQUEZ','HECTOR ACUÑA BOLAÑOS']);
    expect(result2).toEqual(['SALVADOR ARNEDO MANRIQUEZ','HECTOR ACUÑA BOLAÑOS','VICTOR MANUEL ROJAS LUCAS']);
});




