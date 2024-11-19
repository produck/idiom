import * as assert from 'node:assert/strict';
import { describe, it } from 'mocha';

import * as Idiom from '../src/index.mjs';

describe('::Is', function () {
	describe('::Type', function () {
		for (const { name, is, ok, bad } of [{
			name: 'BigInt',
			is: Idiom.Is.Type.BigInt,
			ok: [BigInt(1)],
			bad: [1, 3, '1'],
		}, {
			name: 'Boolean',
			is: Idiom.Is.Type.Boolean,
			ok: [true, false],
			bad: [1, 3, '1'],
		}, {
			name: 'Function',
			is: Idiom.Is.Type.Function,
			ok: [() => {}, function () {}],
			bad: [1, 3, '1'],
		}, {
			name: 'Number',
			is: Idiom.Is.Type.Number,
			ok: [1, 2, 3],
			bad: ['1', true, []],
		}, {
			name: 'Object',
			is: Idiom.Is.Type.Object,
			ok: [{}, null, new Date()],
			bad: [1, true, 'a'],
		}, {
			name: 'String',
			is: Idiom.Is.Type.String,
			ok: ['a'],
			bad: [1, true, null],
		}, {
			name: 'Symbol',
			is: Idiom.Is.Type.Symbol,
			ok: [Symbol.iterator, Symbol()],
			bad: ['1', true, []],
		}, {
			name: 'Undefined',
			is: Idiom.Is.Type.Undefined,
			ok: [void 0],
			bad: ['1', true, []],
		}]) {
			describe(`::${name}`, function () {
				it('should be true.', function () {
					for (const value of ok) {
						assert.ok(is(value));
					}
				});

				it('should be false.', function () {
					for (const value of bad) {
						assert.ok(!is(value));
					}
				});
			});
		}
	});

	for (const { name, is, ok, bad } of [{
		name: 'Null',
		is: Idiom.Is.Null,
		ok: [null],
		bad: [1, 3, '1'],
	}, {
		name: 'Finite',
		is: Idiom.Is.Finite,
		ok: [1, 2, 3],
		bad: [Infinity, -Infinity],
	}, {
		name: 'Integer',
		is: Idiom.Is.Integer,
		ok: [1, 2],
		bad: [1.1, 3.2, '1'],
	}, {
		name: 'SafeInteger',
		is: Idiom.Is.SafeInteger,
		ok: [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
		bad: [Number.MAX_VALUE, Number.MIN_VALUE],
	}, {
		name: 'NaN',
		is: Idiom.Is.NaN,
		ok: ['a', {}],
		bad: [1],
	}, {
		name: 'Array',
		is: Idiom.Is.Array,
		ok: [[]],
		bad: [1, 3, '1'],
	}, {
		name: 'Date',
		is: Idiom.Is.Date,
		ok: [new Date()],
		bad: [1, 3, '1'],
	}, {
		name: 'RegExp',
		is: Idiom.Is.RegExp,
		ok: [/1/, new RegExp('a')],
		bad: [1, 3, '1'],
	}, {
		name: 'Map',
		is: Idiom.Is.Map,
		ok: [new Map()],
		bad: [1, 3, '1'],
	}, {
		name: 'Set',
		is: Idiom.Is.Set,
		ok: [new Set()],
		bad: [1, 3, '1'],
	}, {
		name: 'WeakMap',
		is: Idiom.Is.WeakMap,
		ok: [new WeakMap()],
		bad: [1, 3, '1'],
	}, {
		name: 'WeakSet',
		is: Idiom.Is.WeakSet,
		ok: [new WeakSet()],
		bad: [1, 3, '1'],
	}, {
		name: 'WeakRef',
		is: Idiom.Is.WeakRef,
		ok: [new WeakRef({})],
		bad: [1, 3, '1'],
	}, {
		name: 'ArrayBuffer',
		is: Idiom.Is.ArrayBuffer,
		ok: [new ArrayBuffer()],
		bad: [1, 3, '1'],
	}, {
		name: 'SharedArrayBuffer',
		is: Idiom.Is.SharedArrayBuffer,
		ok: [new SharedArrayBuffer(1)],
		bad: [1, 3, '1'],
	}, {
		name: 'DataView',
		is: Idiom.Is.DataView,
		ok: [new DataView(new ArrayBuffer(1))],
		bad: [1, 3, '1'],
	}, {
		name: 'FinalizationRegistry',
		is: Idiom.Is.FinalizationRegistry,
		ok: [new FinalizationRegistry(() => {})],
		bad: [1, 3, '1'],
	}, {
		name: 'Promise',
		is: Idiom.Is.Promise,
		ok: [Promise.resolve(1)],
		bad: [1, 3, '1'],
	}, {
		name: 'GeneratorFunction',
		is: Idiom.Is.GeneratorFunction,
		ok: [function* () {}],
		bad: [1, 3, '1'],
	}, {
		name: 'AsyncGeneratorFunction',
		is: Idiom.Is.AsyncGeneratorFunction,
		ok: [async function* () {}],
		bad: [1, 3, '1'],
	}, {
		name: 'AsyncFunction',
		is: Idiom.Is.AsyncFunction,
		ok: [async () => {}],
		bad: [1, 3, '1'],
	}]) {
		describe(`::${name}`, function () {
			it('should be true.', function () {
				for (const value of ok) {
					assert.ok(is(value));
				}
			});

			it('should be false.', function () {
				for (const value of bad) {
					assert.ok(!is(value));
				}
			});
		});
	}
});
