const fs = require('fs');
const path = require('path');
var rewire = require("rewire");


const app = rewire("./app.js");

//import the function listClientsIds from the app.js
const listClientsIdsSortByTaxNumber = app.__get__('listClientsIdsSortByTaxNumber');

test('The function returns an array', function () {
    const car = [
        { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
        { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
        { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    ];
    const result = listClientsIdsSortByTaxNumber(car);
    expect(Array.isArray(result)).toBe(true);
});


test('The array must not be empty', function () {
    const car = [
        { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
        { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
        { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    ];
    const result = listClientsIdsSortByTaxNumber(car);
    expect(result.length > 0).toBe(true);
});

test('Check for list of ids', function () {

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

    const result = listClientsIdsSortByTaxNumber(car);
    const result2 = listClientsIdsSortByTaxNumber(car2);
    
    expect(result).toEqual([1,4,5]);
    expect(result2).toEqual([2,56,44]);
});


