import * as assert from 'node:assert/strict';
import { describe, it } from 'mocha';

import * as Common from '../src/index.mjs';

describe('Assert', function () {
	describe('::BigIntType', function () {
		it('should not throw.', function () {
			Common.Assert.BigIntType(1n, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.BigIntType(1, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "BigInt" expected.',
			});
		});
	});

	describe('::BooleanType', function () {
		it('should not throw.', function () {
			Common.Assert.BooleanType(true, 'foo');
			Common.Assert.BooleanType(false, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.BooleanType(1, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Boolean" expected.',
			});
		});
	});

	describe('::FunctionType', function () {
		it('should not throw.', function () {
			Common.Assert.FunctionType(() => {}, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.FunctionType(1, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Function" expected.',
			});
		});
	});

	describe('::NumberType', function () {
		it('should not throw.', function () {
			Common.Assert.NumberType(1, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.NumberType(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Number" expected.',
			});
		});
	});

	describe('::ObjectType', function () {
		it('should not throw.', function () {
			Common.Assert.ObjectType({}, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.ObjectType(1, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Object" expected.',
			});
		});
	});

	describe('::StringType', function () {
		it('should not throw.', function () {
			Common.Assert.StringType('', 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.StringType(1, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "String" expected.',
			});
		});
	});

	describe('::SymbolType', function () {
		it('should not throw.', function () {
			Common.Assert.SymbolType(Symbol.iterator, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.SymbolType(1, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Symbol" expected.',
			});
		});
	});

	describe('::UndefinedType', function () {
		it('should not throw.', function () {
			Common.Assert.UndefinedType(undefined, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.UndefinedType(1, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Undefined" expected.',
			});
		});
	});

	describe('::Null', function () {
		it('should not throw.', function () {
			Common.Assert.Null(null, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Null(1, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Null" expected.',
			});
		});
	});

	describe('::Finite', function () {
		it('should not throw.', function () {
			Common.Assert.Finite(1, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Finite(Infinity, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Finite" expected.',
			});
		});
	});

	describe('::Integer', function () {
		it('should not throw.', function () {
			Common.Assert.Integer(1, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Integer(.1, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Integer" expected.',
			});
		});
	});

	describe('::SafeInteger', function () {
		it('should not throw.', function () {
			Common.Assert.SafeInteger(1, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.SafeInteger(.1, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "SafeInteger" expected.',
			});
		});
	});

	describe('::Array', function () {
		it('should not throw.', function () {
			Common.Assert.Array([], 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Array(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Array" expected.',
			});
		});
	});

	describe('::Date', function () {
		it('should not throw.', function () {
			Common.Assert.Date(new Date(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Date(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Date" expected.',
			});
		});
	});

	describe('::RegExp', function () {
		it('should not throw.', function () {
			Common.Assert.RegExp(/a/, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.RegExp(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "RegExp" expected.',
			});
		});
	});

	describe('::Map', function () {
		it('should not throw.', function () {
			Common.Assert.Map(new Map(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Map(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Map" expected.',
			});
		});
	});

	describe('::Set', function () {
		it('should not throw.', function () {
			Common.Assert.Set(new Set(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Set(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Set" expected.',
			});
		});
	});

	describe('::WeakMap', function () {
		it('should not throw.', function () {
			Common.Assert.WeakMap(new WeakMap(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.WeakMap(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "WeakMap" expected.',
			});
		});
	});

	describe('::WeakSet', function () {
		it('should not throw.', function () {
			Common.Assert.WeakSet(new WeakSet(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.WeakSet(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "WeakSet" expected.',
			});
		});
	});

	describe('::WeakRef', function () {
		it('should not throw.', function () {
			Common.Assert.WeakRef(new WeakRef({}), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.WeakRef(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "WeakRef" expected.',
			});
		});
	});

	describe('::ArrayBuffer', function () {
		it('should not throw.', function () {
			Common.Assert.ArrayBuffer(new ArrayBuffer(10), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.ArrayBuffer(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "ArrayBuffer" expected.',
			});
		});
	});

	describe('::SharedArrayBuffer', function () {
		it('should not throw.', function () {
			Common.Assert.SharedArrayBuffer(new SharedArrayBuffer(10), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.SharedArrayBuffer(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "SharedArrayBuffer" expected.',
			});
		});
	});

	describe('::DataView', function () {
		it('should not throw.', function () {
			Common.Assert.DataView(new DataView(new ArrayBuffer(10)), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.DataView(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "DataView" expected.',
			});
		});
	});

	describe('::FinalizationRegistry', function () {
		it('should not throw.', function () {
			Common.Assert.FinalizationRegistry(new FinalizationRegistry(() => {}), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.FinalizationRegistry(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "FinalizationRegistry" expected.',
			});
		});
	});

	describe('::Promise', function () {
		it('should not throw.', function () {
			Common.Assert.Promise(new Promise(() => {}), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Promise(null, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Promise" expected.',
			});
		});
	});

	describe('::GeneratorFunction', function () {
		it('should not throw.', function () {
			Common.Assert.GeneratorFunction(function *() {}, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.GeneratorFunction(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "GeneratorFunction" expected.',
			});
		});
	});

	describe('::AsyncGeneratorFunction', function () {
		it('should not throw.', function () {
			Common.Assert.AsyncGeneratorFunction(async function *() {}, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.AsyncGeneratorFunction(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "AsyncGeneratorFunction" expected.',
			});
		});
	});

	describe('::AsyncFunction', function () {
		it('should not throw.', function () {
			Common.Assert.AsyncFunction(async () => {}, 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.AsyncFunction(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "AsyncFunction" expected.',
			});
		});
	});

	describe('::Error', function () {
		it('should not throw.', function () {
			Common.Assert.Error(new Error(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Error(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Error" expected.',
			});
		});
	});

	describe('::AggregateError', function () {
		it('should not throw.', function () {
			Common.Assert.AggregateError(new AggregateError([]), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.AggregateError(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "AggregateError" expected.',
			});
		});
	});

	describe('::EvalError', function () {
		it('should not throw.', function () {
			Common.Assert.EvalError(new EvalError(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.EvalError(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "EvalError" expected.',
			});
		});
	});

	describe('::RangeError', function () {
		it('should not throw.', function () {
			Common.Assert.RangeError(new RangeError(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.RangeError(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "RangeError" expected.',
			});
		});
	});

	describe('::ReferenceError', function () {
		it('should not throw.', function () {
			Common.Assert.ReferenceError(new ReferenceError(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.ReferenceError(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "ReferenceError" expected.',
			});
		});
	});

	describe('::TypeError', function () {
		it('should not throw.', function () {
			Common.Assert.TypeError(new TypeError(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.TypeError(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "TypeError" expected.',
			});
		});
	});

	describe('::URIError', function () {
		it('should not throw.', function () {
			Common.Assert.URIError(new URIError(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.URIError(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "URIError" expected.',
			});
		});
	});

	describe('::TypedArray', function () {
		it('should not throw.', function () {
			Common.Assert.TypedArray(new Int8Array(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.TypedArray(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "TypedArray" expected.',
			});
		});
	});

	describe('::Int8Array', function () {
		it('should not throw.', function () {
			Common.Assert.Int8Array(new Int8Array(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Int8Array(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Int8Array" expected.',
			});
		});
	});

	describe('::Uint8Array', function () {
		it('should not throw.', function () {
			Common.Assert.Uint8Array(new Uint8Array(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Uint8Array(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Uint8Array" expected.',
			});
		});
	});

	describe('::Uint8ClampedArray', function () {
		it('should not throw.', function () {
			Common.Assert.Uint8ClampedArray(new Uint8ClampedArray(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Uint8ClampedArray(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Uint8ClampedArray" expected.',
			});
		});
	});

	describe('::Int16Array', function () {
		it('should not throw.', function () {
			Common.Assert.Int16Array(new Int16Array(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Int16Array(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Int16Array" expected.',
			});
		});
	});

	describe('::Uint16Array', function () {
		it('should not throw.', function () {
			Common.Assert.Uint16Array(new Uint16Array(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Uint16Array(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Uint16Array" expected.',
			});
		});
	});

	describe('::Int32Array', function () {
		it('should not throw.', function () {
			Common.Assert.Int32Array(new Int32Array(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Int32Array(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Int32Array" expected.',
			});
		});
	});

	describe('::Uint32Array', function () {
		it('should not throw.', function () {
			Common.Assert.Uint32Array(new Uint32Array(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Uint32Array(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Uint32Array" expected.',
			});
		});
	});

	describe('::BigInt64Array', function () {
		it('should not throw.', function () {
			Common.Assert.BigInt64Array(new BigInt64Array(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.BigInt64Array(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "BigInt64Array" expected.',
			});
		});
	});

	describe('::BigUint64Array', function () {
		it('should not throw.', function () {
			Common.Assert.BigUint64Array(new BigUint64Array(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.BigUint64Array(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "BigUint64Array" expected.',
			});
		});
	});

	describe('::Float32Array', function () {
		it('should not throw.', function () {
			Common.Assert.Float32Array(new Float32Array(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Float32Array(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Float32Array" expected.',
			});
		});
	});

	describe('::Float64Array', function () {
		it('should not throw.', function () {
			Common.Assert.Float64Array(new Float64Array(), 'foo');
		});

		it('should throw if bad value.', function () {
			assert.throws(() => Common.Assert.Float64Array(() => {}, 'foo'), {
				name: 'TypeError',
				message: 'Invalid "foo", one "Float64Array" expected.',
			});
		});
	});
});
