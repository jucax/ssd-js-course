import {formatCurrency} from '../scripts/utils/money.js';

// describe() creates a test suite in Jasmine
describe('Test suite: formatCurrency', () => {
    // it() creates a test
    it('Converts cents into dollars', () => {
        // expect() compare a value to other value, so we dont have to use the if statement
        // toEqual() is like use the '===' comparision
        expect(formatCurrency(2095)).toEqual('20.95');
    });
});