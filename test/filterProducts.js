const test = require('tape');
const filterProducts = require('../filterProducts');
const exampleData = require('./data.js');

test.skip("basic test filter", function (t) {
    let result = filterProducts(exampleData, 'roctane');
    console.log(result);
    t.end();
});

test.skip("Variant filter", function (t) {
    let result = filterProducts(exampleData, 'roctane mg');
    console.log(result);
    t.end();
});

test("No filter", function (t) {
    let result = filterProducts(exampleData, '');
    console.log(result);
    t.end();
});