import * as Assert from 'node:assert/strict';
import { describe, it } from 'mocha';

import * as Idiom from '../src/index.mjs';

describe('::Assert', function () {
	describe.skip('::Type', function () {
		for (const { name, assert, ok, invalid } of [{
			name: 'BigInt',
			assert: Idiom.Assert.Type.BigInt,
			ok: [BigInt(1)],
			invalid: [1, '', Function],
		}, {
			name: 'Boolean',
			assert: Idiom.Assert.Type.Boolean,
			ok: [true, false],
			invalid: [1, null, ''],
		}, {
			name: 'Function',
			assert: Idiom.Assert.Type.Function,
			ok: [() => {}, function () {}, async function () {}],
			invalid: [1, null, '', true, false],
		}, {
			name: 'Number',
			assert: Idiom.Assert.Type.Number,
			ok: [1, -Infinity, 0.001],
			invalid: ['', true, null, {}],
		}, {
			name: 'Object',
			assert: Idiom.Assert.Type.Object,
			ok: [null, {}, [], new Date()],
			invalid: [1, true, '', () => {}],
		}, {
			name: 'String',
			assert: Idiom.Assert.Type.String,
			ok: ['11', 'a'],
			invalid: [1, null, {}, true],
		}, {
			name: 'Symbol',
			assert: Idiom.Assert.Type.Symbol,
			ok: [Symbol.iterator, Symbol()],
			invalid: [11, 'a', true, null, {}],
		}, {
			name: 'Undefined',
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

	for (const { name, assert, ok, invalid } of [{
		name: 'AggregateError',
		assert: Idiom.Assert.AggregateError,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Array',
		assert: Idiom.Assert.Array,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'ArrayBuffer',
		assert: Idiom.Assert.ArrayBuffer,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'AsyncFunction',
		assert: Idiom.Assert.AsyncFunction,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'AsyncGeneratorFunction',
		assert: Idiom.Assert.AsyncGeneratorFunction,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'BigInt64Array',
		assert: Idiom.Assert.BigInt64Array,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'BigUint64Array',
		assert: Idiom.Assert.BigUint64Array,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'DataView',
		assert: Idiom.Assert.DataView,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Date',
		assert: Idiom.Assert.Date,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Error',
		assert: Idiom.Assert.Error,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'EvalError',
		assert: Idiom.Assert.EvalError,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'FinalizationRegistry',
		assert: Idiom.Assert.FinalizationRegistry,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Finite',
		assert: Idiom.Assert.Finite,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Float32Array',
		assert: Idiom.Assert.Float32Array,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Float64Array',
		assert: Idiom.Assert.Float64Array,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'GeneratorFunction',
		assert: Idiom.Assert.GeneratorFunction,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Int16Array',
		assert: Idiom.Assert.Int16Array,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Int32Array',
		assert: Idiom.Assert.Int32Array,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Int8Array',
		assert: Idiom.Assert.Int8Array,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Integer',
		assert: Idiom.Assert.Integer,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Map',
		assert: Idiom.Assert.Map,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Null',
		assert: Idiom.Assert.Null,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Promise',
		assert: Idiom.Assert.Promise,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'RangeError',
		assert: Idiom.Assert.RangeError,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'ReferenceError',
		assert: Idiom.Assert.ReferenceError,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'RegExp',
		assert: Idiom.Assert.RegExp,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'SafeInteger',
		assert: Idiom.Assert.SafeInteger,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'Set',
		assert: Idiom.Assert.Set,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'SharedArrayBuffer',
		assert: Idiom.Assert.SharedArrayBuffer,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'TypeError',
		assert: Idiom.Assert.TypeError,
		ok: [new AggregateError([])],
		invalid: [new Error],
	}, {
		name: 'TypedArray',
		assert: Idiom.Assert.TypedArray,
		ok: [new AggregateError([])],
		invalid: [new Error],
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
