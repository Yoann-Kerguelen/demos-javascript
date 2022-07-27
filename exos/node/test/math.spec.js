var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

const operation = require('../Math');

describe('Number', function () {
    describe('ADDITIONS', function () {
        it('la fonction retourne bien 3', function () {
            assert.equal(3, operation.addition(1, 2));
        });
    });
});

describe('Number', function () {
    describe('SOUSTRACTION', function () {
        it('la fonction retourne bien -1', function () {
            assert.equal(-1, operation.soustraction(1, 2));
        });
    });
});

describe('Number', function () {
    describe('MULTIPLICATIONS', function () {
        it('la fonction retourne bien 2', function () {
            assert.equal(2, operation.multiplication(1, 2));
        });
    });
});

describe('Number', function () {
    describe('DIVISIONS', function () {
        it('la fonction retourne bien 0.5', function () {
            assert.equal(0.5, operation.division(1, 2));
        });
    });
});