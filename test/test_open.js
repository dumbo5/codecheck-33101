var co = require('co');
var expect = require('expect');
var run = require('./lib.js').run;

describe('Creative Engineer Exam #1 (Open Tests)', () => {
	it('Case #1 should be caluculated', () => co(function*() {
		const input = [
			'2017/02',
			'2017/02/01 08:00-12:00 13:00-16:00'
		];
		const expected = [
			'0', '0', '0', '0', '0'
		];
		const actual = yield run('./run.sh', [], input.join('\n'));
		expect(actual).toEqual(expected);
	}));

	it('Case #2 should be caluculated', () => co(function*() {
		const input = [
			'2017/02',
			'2017/02/01 08:00-12:00 13:00-17:00'
		];
		const expected = [
			'1', '0', '0', '0', '0'
		];
		const actual = yield run('./run.sh', [], input.join('\n'));
		expect(actual).toEqual(expected);
	}));

	it('Case #3 should be caluculated', () => co(function*() {
		const input = [
			'2017/02',
			'2017/02/01 08:00-12:00 13:00-21:00'
		];
		const expected = [
			'1', '4', '0', '0', '0'
		];
		const actual = yield run('./run.sh', [], input.join('\n'));
		expect(actual).toEqual(expected);
	}));

	it('Case #4 should be caluculated', () => co(function*() {
		const input = [
			'2017/02',
			'2017/02/01 10:00-12:00 13:00-21:00'
		];
		const expected = [
			'3', '2', '0', '0', '0'
		];
		const actual = yield run('./run.sh', [], input.join('\n'));
		expect(actual).toEqual(expected);
	}));

	it('Case #5 should be caluculated', () => co(function*() {
		const input = [
			'2017/02',
			'2017/02/01 08:00-12:00 13:00-26:00'
		];
		const expected = [
			'1', '9', '4', '0', '0'
		];
		const actual = yield run('./run.sh', [], input.join('\n'));
		expect(actual).toEqual(expected);
	}));

	it('Case #6 should be caluculated', () => co(function*() {
		const input = [
			'2017/02',
			'2017/02/04 08:00-12:00 13:00-23:00'
		];
		const expected = [
			'0', '0', '1', '14', '0'
		];
		const actual = yield run('./run.sh', [], input.join('\n'));
		expect(actual).toEqual(expected);
	}));

	it('Case #7 should be caluculated', () => co(function*() {
		const input = [
			'2017/02',
			'2017/02/03 08:00-12:00 13:00-26:00'
		];
		const expected = [
			'1', '7', '4', '2', '0'
		];
		const actual = yield run('./run.sh', [], input.join('\n'));
		expect(actual).toEqual(expected);
	}));

	it('Case #8 should be caluculated', () => co(function*() {
		const input = [
			'2017/02',
			'2017/02/05 08:00-12:00 13:00-23:00'
		];
		const expected = [
			'0', '0', '1', '0', '14'
		];
		const actual = yield run('./run.sh', [], input.join('\n'));
		expect(actual).toEqual(expected);
	}));

	it('Case #9 should be caluculated', () => co(function*() {
		const input = [
			'2017/02',
			'2017/02/04 08:00-12:00 13:00-26:00'
		];
		const expected = [
			'0', '0', '4', '15', '2'
		];
		const actual = yield run('./run.sh', [], input.join('\n'));
		expect(actual).toEqual(expected);
	}));

	it('Case #10 should be caluculated', () => co(function*() {
		const input1 = [
			'2017/01',
			'2017/01/16 08:00-12:00 13:00-18:00',
			'2017/01/17 08:00-12:00 13:00-18:00',
			'2017/01/18 08:00-12:00 13:00-18:00',
			'2017/01/19 08:00-12:00 13:00-17:00'
		];
		const expected1 = [
			'4', '3', '0', '0', '0'
		];
		const actual1 = yield run('./run.sh', [], input1.join('\n'));
		expect(actual1).toEqual(expected1);

		const input2 = [
			'2017/01',
			'2017/01/16 08:00-12:00 13:00-18:00',
			'2017/01/17 08:00-12:00 13:00-18:00',
			'2017/01/18 08:00-12:00 13:00-18:00',
			'2017/01/19 08:00-12:00 13:00-17:00',
			'2017/01/20 08:00-12:00 13:00-21:00'
		];
		const expected2 = [
			'4', '10', '0', '0', '0'
		];
		const actual2 = yield run('./run.sh', [], input2.join('\n'));
		expect(actual2).toEqual(expected2);
	}));
});
