import * as Assert from 'node:assert/strict';
import { describe, it } from 'mocha';

import * as Idiom from '../src/index.mjs';

describe('::Assert', function () {
	describe('::AssertBuilder', function () {
		it('should throw if bad role.', function () {
			Assert.throws(() => Idiom.Assert.Array([], null), {
				name: 'TypeError',
				message: 'Invalid "role", one "string" expected.',
			});
		});

		it('should throw if bad expected.', function () {
			Assert.throws(() => Idiom.Assert.Array([], 'foo', null), {
				name: 'TypeError',
				message: 'Invalid "expected", one "string" expected.',
			});
		});
	});

	describe('::Type', function () {
		for (const { name, assert, ok, invalid } of [{
			name: 'bigint',
			assert: Idiom.Assert.Type.BigInt,
			ok: [BigInt(1)],
			invalid: [1, '', Function],
		}, {
			name: 'boolean',
			assert: Idiom.Assert.Type.Boolean,
			ok: [true, false],
			invalid: [1, null, ''],
		}, {
			name: 'function',
			assert: Idiom.Assert.Type.Function,
			ok: [() => {}, function () {}, async function () {}],
			invalid: [1, null, '', true, false],
		}, {
			name: 'number',
			assert: Idiom.Assert.Type.Number,
			ok: [1, -Infinity, 0.001],
			invalid: ['', true, null, {}],
		}, {
			name: 'object',
			assert: Idiom.Assert.Type.Object,
			ok: [null, {}, [], new Date()],
			invalid: [1, true, '', () => {}],
		}, {
			name: 'string',
			assert: Idiom.Assert.Type.String,
			ok: ['11', 'a'],
			invalid: [1, null, {}, true],
		}, {
			name: 'symbol',
			assert: Idiom.Assert.Type.Symbol,
			ok: [Symbol.iterator, Symbol()],
			invalid: [11, 'a', true, null, {}],
		}, {
			name: 'undefined',
			assert: Idiom.Assert.Type.Undefined,
			ok: [undefined, void 0],
			invalid: [11, 'a', null],
		}]) {
			describe(`::${name}()`, function () {
				it('should be ok.', function () {
					for (const value of ok) {
						assert(value, 'foo');
					}
				});

				it('should throw if bad value.', function () {
					for (const value of invalid) {
						Assert.throws(() => assert(value, 'foo'), {
							name: 'TypeError',
							message: `Invalid "foo", one "${name}" expected.`,
						});
					}
				});
			});
		}
	});

	const DEFAULT_INVALID = [{}];

	for (const { name, assert, ok, invalid = DEFAULT_INVALID } of [{
		name: 'AggregateError',
		assert: Idiom.Assert.AggregateError,
		ok: [new AggregateError([])],
	}, {
		name: 'Array',
		assert: Idiom.Assert.Array,
		ok: [[], new Array(1)],
	}, {
		name: 'ArrayBuffer',
		assert: Idiom.Assert.ArrayBuffer,
		ok: [new ArrayBuffer(1)],
	}, {
		name: 'AsyncFunction',
		assert: Idiom.Assert.AsyncFunction,
		ok: [async () => {}, async function() {}],
	}, {
		name: 'AsyncGeneratorFunction',
		assert: Idiom.Assert.AsyncGeneratorFunction,
		ok: [async function*() {}],
	}, {
		name: 'BigInt64Array',
		assert: Idiom.Assert.BigInt64Array,
		ok: [new BigInt64Array(1)],
	}, {
		name: 'BigUint64Array',
		assert: Idiom.Assert.BigUint64Array,
		ok: [new BigUint64Array(1)],
	}, {
		name: 'DataView',
		assert: Idiom.Assert.DataView,
		ok: [new DataView(new ArrayBuffer(1))],
	}, {
		name: 'Date',
		assert: Idiom.Assert.Date,
		ok: [new Date()],
	}, {
		name: 'Error',
		assert: Idiom.Assert.Error,
		ok: [new Error('')],
	}, {
		name: 'EvalError',
		assert: Idiom.Assert.EvalError,
		ok: [new EvalError('')],
	}, {
		name: 'FinalizationRegistry',
		assert: Idiom.Assert.FinalizationRegistry,
		ok: [new FinalizationRegistry(() => {})],
	}, {
		name: 'Finite',
		assert: Idiom.Assert.Finite,
		ok: [1, 2, 0],
		invalid: [Infinity, -Infinity],
	}, {
		name: 'Float32Array',
		assert: Idiom.Assert.Float32Array,
		ok: [new Float32Array()],
	}, {
		name: 'Float64Array',
		assert: Idiom.Assert.Float64Array,
		ok: [new Float64Array()],
	}, {
		name: 'GeneratorFunction',
		assert: Idiom.Assert.GeneratorFunction,
		ok: [function*() {}],
	}, {
		name: 'Int16Array',
		assert: Idiom.Assert.Int16Array,
		ok: [new Int16Array(1)],
	}, {
		name: 'Int32Array',
		assert: Idiom.Assert.Int32Array,
		ok: [new Int32Array(1)],
	}, {
		name: 'Int8Array',
		assert: Idiom.Assert.Int8Array,
		ok: [new Int8Array(1)],
	}, {
		name: 'Integer',
		assert: Idiom.Assert.Integer,
		ok: [1, 2, 3, 10],
		invalid: [0.1, 0.3],
	}, {
		name: 'Map',
		assert: Idiom.Assert.Map,
		ok: [new Map()],
	}, {
		name: 'Null',
		assert: Idiom.Assert.Null,
		ok: [null],
	}, {
		name: 'Promise',
		assert: Idiom.Assert.Promise,
		ok: [Promise.resolve(1)],
	}, {
		name: 'RangeError',
		assert: Idiom.Assert.RangeError,
		ok: [new RangeError('')],
	}, {
		name: 'ReferenceError',
		assert: Idiom.Assert.ReferenceError,
		ok: [new ReferenceError('')],
	}, {
		name: 'RegExp',
		assert: Idiom.Assert.RegExp,
		ok: [/1/, new RegExp('a')],
	}, {
		name: 'SafeInteger',
		assert: Idiom.Assert.SafeInteger,
		ok: [1, Number.MAX_SAFE_INTEGER],
		invalid: [Number.MAX_VALUE],
	}, {
		name: 'Set',
		assert: Idiom.Assert.Set,
		ok: [new Set()],
	}, {
		name: 'TypeError',
		assert: Idiom.Assert.TypeError,
		ok: [new TypeError('')],
	}, {
		name: 'TypedArray',
		assert: Idiom.Assert.TypedArray,
		ok: [new Int8Array(1)],
	}, {
		name: 'URIError',
		assert: Idiom.Assert.URIError,
		ok: [new URIError('')],
	}, {
		name: 'Uint16Array',
		assert: Idiom.Assert.Uint16Array,
		ok: [new Uint16Array(1)],
	}, {
		name: 'Uint32Array',
		assert: Idiom.Assert.Uint32Array,
		ok: [new Uint32Array(1)],
	}, {
		name: 'Uint8Array',
		assert: Idiom.Assert.Uint8Array,
		ok: [new Uint8Array(1)],
	}, {
		name: 'Uint8ClampedArray',
		assert: Idiom.Assert.Uint8ClampedArray,
		ok: [new Uint8ClampedArray(1)],
	}, {
		name: 'WeakMap',
		assert: Idiom.Assert.WeakMap,
		ok: [new WeakMap()],
	}, {
		name: 'WeakRef',
		assert: Idiom.Assert.WeakRef,
		ok: [new WeakRef({})],
	}, {
		name: 'WeakSet',
		assert: Idiom.Assert.WeakSet,
		ok: [new WeakSet()],
	}]) {
		describe(`::${name}()`, function () {
			it('should be ok.', function () {
				for (const value of ok) {
					assert(value, 'foo');
				}
			});

			it('should throw if bad value.', function () {
				for (const value of invalid) {
					Assert.throws(() => assert(value, 'foo'), {
						name: 'TypeError',
						message: `Invalid "foo", one "${name}" expected.`,
					});
				}
			});
		});
	}
});
