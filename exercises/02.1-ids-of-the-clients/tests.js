const fs = require('fs');
const path = require('path');
var rewire = require("rewire");

//I have to use rewire because the variables "clients" and "listClientsIds" are not exported
const app = rewire("./app.js");

//import the function listClientsIds from the app.js
const listClientsIds = app.__get__('listClientsIds');

test('The function returns an array', function () {
    const car = [
        { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
        { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
        { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    ];
    const result = listClientsIds(car);
    expect(Array.isArray(result)).toBe(true);
});


test('The array must not be empty', function () {
    const car = [
        { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
        { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
        { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    ];
    const result = listClientsIds(car);
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

    const result = listClientsIds(car);
    const result2 = listClientsIds(car2);
    expect(result).toEqual([1,5,4]);
    expect(result2).toEqual([2,44,56]);
});


