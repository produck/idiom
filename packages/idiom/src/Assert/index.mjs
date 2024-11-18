import * as Is from '../Is/index.mjs';
import { Assert } from './AssertBuilder.mjs';

export const Array = Assert(Is.Array, 'Array');
export const Null = Assert(Is.Null, 'Null');
export const Finite = Assert(Is.Finite, 'Finite');
export const Integer = Assert(Is.Integer, 'Integer');
export const SafeInteger = Assert(Is.SafeInteger, 'SafeInteger');
export const Date = Assert(Is.Date, 'Date');
export const RegExp = Assert(Is.RegExp, 'RegExp');
export const Map = Assert(Is.Map, 'Map');
export const Set = Assert(Is.Set, 'Set');
export const WeakMap = Assert(Is.WeakMap, 'WeakMap');
export const WeakSet = Assert(Is.WeakSet, 'WeakSet');
export const WeakRef = Assert(Is.WeakRef, 'WeakRef');
export const ArrayBuffer = Assert(Is.ArrayBuffer, 'ArrayBuffer');
export const SharedArrayBuffer = Assert(Is.SharedArrayBuffer, 'SharedArrayBuffer');
export const DataView = Assert(Is.DataView, 'DataView');
export const FinalizationRegistry = Assert(Is.FinalizationRegistry, 'FinalizationRegistry');
export const Promise = Assert(Is.Promise, 'Promise');
export const GeneratorFunction = Assert(Is.GeneratorFunction, 'GeneratorFunction');
export const AsyncGeneratorFunction = Assert(Is.AsyncGeneratorFunction, 'AsyncGeneratorFunction');
export const AsyncFunction = Assert(Is.AsyncFunction, 'AsyncFunction');
export const Error = Assert(Is.Error, 'Error');
export const AggregateError = Assert(Is.AggregateError, 'AggregateError');
export const EvalError = Assert(Is.EvalError, 'EvalError');
export const RangeError = Assert(Is.RangeError, 'RangeError');
export const ReferenceError = Assert(Is.ReferenceError, 'ReferenceError');
export const TypeError = Assert(Is.TypeError, 'TypeError');
export const URIError = Assert(Is.URIError, 'URIError');
export const TypedArray = Assert(Is.TypedArray, 'TypedArray');
export const Int8Array = Assert(Is.Int8Array, 'Int8Array');
export const Uint8Array = Assert(Is.Uint8Array, 'Uint8Array');
export const Uint8ClampedArray = Assert(Is.Uint8ClampedArray, 'Uint8ClampedArray');
export const Int16Array = Assert(Is.Int16Array, 'Int16Array');
export const Uint16Array = Assert(Is.Uint16Array, 'Uint16Array');
export const Int32Array = Assert(Is.Int32Array, 'Int32Array');
export const Uint32Array = Assert(Is.Uint32Array, 'Uint32Array');
export const BigInt64Array = Assert(Is.BigInt64Array, 'BigInt64Array');
export const BigUint64Array = Assert(Is.BigUint64Array, 'BigUint64Array');
export const Float32Array = Assert(Is.Float32Array, 'Float32Array');
export const Float64Array = Assert(Is.Float64Array, 'Float64Array');

export * as Type from './Type.mjs';
