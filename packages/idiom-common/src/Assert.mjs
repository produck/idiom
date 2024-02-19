import { ThrowTemplatedTypeError } from './Error.mjs';

const Assertor = (validator, _expected) => {
	return (value, role, expected = _expected) => {
		if (!validator(value)) {
			ThrowTemplatedTypeError(role, expected);
		}
	};
};

import * as Is from './Is.mjs';

export const Array = Assertor(Is.Array, 'Array');
export const BigIntType = Assertor(Is.BigIntType, 'BigInt');
export const BooleanType = Assertor(Is.BooleanType, 'Boolean');
export const FunctionType = Assertor(Is.FunctionType, 'Function');
export const NumberType = Assertor(Is.NumberType, 'Number');
export const ObjectType = Assertor(Is.ObjectType, 'Object');
export const StringType = Assertor(Is.StringType, 'String');
export const SymbolType = Assertor(Is.SymbolType, 'Symbol');
export const UndefinedType = Assertor(Is.UndefinedType, 'Undefined');
export const Null = Assertor(Is.Null, 'Null');
export const Finite = Assertor(Is.Finite, 'Finite');
export const Integer = Assertor(Is.Integer, 'Integer');
export const SafeInteger = Assertor(Is.SafeInteger, 'SafeInteger');
export const Date = Assertor(Is.Date, 'Date');
export const RegExp = Assertor(Is.RegExp, 'RegExp');
export const Map = Assertor(Is.Map, 'Map');
export const Set = Assertor(Is.Set, 'Set');
export const WeakMap = Assertor(Is.WeakMap, 'WeakMap');
export const WeakSet = Assertor(Is.WeakSet, 'WeakSet');
export const WeakRef = Assertor(Is.WeakRef, 'WeakRef');
export const ArrayBuffer = Assertor(Is.ArrayBuffer, 'ArrayBuffer');
export const SharedArrayBuffer = Assertor(Is.SharedArrayBuffer, 'SharedArrayBuffer');
export const DataView = Assertor(Is.DataView, 'DataView');
export const FinalizationRegistry = Assertor(Is.FinalizationRegistry, 'FinalizationRegistry');
export const Promise = Assertor(Is.Promise, 'Promise');
export const GeneratorFunction = Assertor(Is.GeneratorFunction, 'GeneratorFunction');
export const AsyncGeneratorFunction = Assertor(Is.AsyncGeneratorFunction, 'AsyncGeneratorFunction');
export const AsyncFunction = Assertor(Is.AsyncFunction, 'AsyncFunction');
export const Error = Assertor(Is.Error, 'Error');
export const AggregateError = Assertor(Is.AggregateError, 'AggregateError');
export const EvalError = Assertor(Is.EvalError, 'EvalError');
export const RangeError = Assertor(Is.RangeError, 'RangeError');
export const ReferenceError = Assertor(Is.ReferenceError, 'ReferenceError');
export const TypeError = Assertor(Is.TypeError, 'TypeError');
export const URIError = Assertor(Is.URIError, 'URIError');
export const TypedArray = Assertor(Is.TypedArray, 'TypedArray');
export const Int8Array = Assertor(Is.Int8Array, 'Int8Array');
export const Uint8Array = Assertor(Is.Uint8Array, 'Uint8Array');
export const Uint8ClampedArray = Assertor(Is.Uint8ClampedArray, 'Uint8ClampedArray');
export const Int16Array = Assertor(Is.Int16Array, 'Int16Array');
export const Uint16Array = Assertor(Is.Uint16Array, 'Uint16Array');
export const Int32Array = Assertor(Is.Int32Array, 'Int32Array');
export const Uint32Array = Assertor(Is.Uint32Array, 'Uint32Array');
export const BigInt64Array = Assertor(Is.BigInt64Array, 'BigInt64Array');
export const BigUint64Array = Assertor(Is.BigUint64Array, 'BigUint64Array');
export const Float32Array = Assertor(Is.Float32Array, 'Float32Array');
export const Float64Array = Assertor(Is.Float64Array, 'Float64Array');
