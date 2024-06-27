"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dates_1 = require("../dates");
describe('calculateAge', () => {
    test('Calculate age from Date object', () => {
        const birthDate = new Date(1990, 0, 1);
        expect((0, dates_1.calculateAge)(birthDate)).toBe(34);
    });
    test('Calculate age from string', () => {
        const birthDateString = '1990-01-01';
        expect((0, dates_1.calculateAge)(birthDateString)).toBe(34);
    });
});
describe('convertDateFormat', () => {
    test('Convert from "yyyy-mm-dd" to "dd/mm/yyyy"', () => {
        const date = '2023-06-27';
        expect((0, dates_1.convertDateFormat)(date)).toBe('27/06/2023');
    });
    test('Convert from "dd/mm/yyyy" to "yyyy-mm-dd"', () => {
        const date = '27/06/2023';
        expect((0, dates_1.convertDateFormat)(date)).toBe('2023-06-27');
    });
});
