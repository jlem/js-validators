import { isPositiveNumber } from '../src';

describe('isPositiveNumber()', () => {
	it('should return false when the value is null', () => {
		expect(isPositiveNumber(null)).toBe(false);
	});

	it('should return false when the value is undefined', () => {
		expect(isPositiveNumber()).toBe(false);
	});

	it('should return false when the value is a numeric string', () => {
		expect(isPositiveNumber('123')).toBe(false);
	});

	it('should return false when the value is an empty string', () => {
		expect(isPositiveNumber('')).toBe(false);
	});

	it('should return false when the value is an object', () => {
		expect(isPositiveNumber({})).toBe(false);
	});

	it('should return false when the value is an array', () => {
		expect(isPositiveNumber([])).toBe(false);
	});

	it('should return false when the value is a NaN', () => {
		expect(isPositiveNumber(NaN)).toBe(false);
	});

	it('should return false when the value is 0', () => {
		expect(isPositiveNumber(0)).toBe(false);
	});

	it('should return false when the value is negative', () => {
		expect(isPositiveNumber(-1)).toBe(false);
	});

	it('should return false when the value is exceeds max safe integer', () => {
		expect(isPositiveNumber(Math.MAX_SAFE_INTEGER + 1)).toBe(false);
	});

	it('should return false when the value is positive infinity', () => {
		expect(isPositiveNumber(Infinity)).toBe(false);
	});

	it('should return true when the value is a positive number', () => {
		expect(isPositiveNumber(5.5)).toBe(true);
	});
});