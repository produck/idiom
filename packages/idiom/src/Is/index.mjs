import * as ES from '../ES.mjs';
import * as B from './BuiltIn.mjs';

export const Null = any => any === null;
export const Finite = Number.isFinite;
export const Integer = Number.isInteger;
export const SafeInteger = Number.isSafeInteger;

export const Date = any => ES.InstanceOf(any, B.Date);
export const RegExp = any => ES.InstanceOf(any, B.RegExp);
export const Map = any => ES.InstanceOf(any, B.Map);
export const Set = any => ES.InstanceOf(any, B.Set);
export const WeakMap = any => ES.InstanceOf(any, B.WeakMap);
export const WeakSet = any => ES.InstanceOf(any, B.WeakSet);
export const WeakRef = any => ES.InstanceOf(any, B.WeakRef);
export const ArrayBuffer = any => ES.InstanceOf(any, B.ArrayBuffer);
export const SharedArrayBuffer = any => ES.InstanceOf(any, B.SharedArrayBuffer);
export const DataView = any => ES.InstanceOf(any, B.DataView);
export const FinalizationRegistry = any => ES.InstanceOf(any, B.FinalizationRegistry);
export const Promise = any => ES.InstanceOf(any, B.Promise);
export const GeneratorFunction = any => ES.InstanceOf(any, B.GeneratorFunction);
export const AsyncGeneratorFunction = any => ES.InstanceOf(any, B.AsyncGeneratorFunction);
export const AsyncFunction = any => ES.InstanceOf(any, B.AsyncFunction);

export const Error = any => ES.InstanceOf(any, B.Error);
export const AggregateError = any => ES.InstanceOf(any, B.AggregateError);
export const EvalError = any => ES.InstanceOf(any, B.EvalError);
export const RangeError = any => ES.InstanceOf(any, B.RangeError);
export const ReferenceError = any => ES.InstanceOf(any, B.ReferenceError);
export const TypeError = any => ES.InstanceOf(any, B.TypeError);
export const URIError = any => ES.InstanceOf(any, B.URIError);

export const TypedArray = any => ES.InstanceOf(any, B.TypedArray);
export const Int8Array = any => ES.InstanceOf(any, B.Int8Array);
export const Uint8Array = any => ES.InstanceOf(any, B.Uint8Array);
export const Uint8ClampedArray = any => ES.InstanceOf(any, B.Uint8ClampedArray);
export const Int16Array = any => ES.InstanceOf(any, B.Int16Array);
export const Uint16Array = any => ES.InstanceOf(any, B.Uint16Array);
export const Int32Array = any => ES.InstanceOf(any, B.Int32Array);
export const Uint32Array = any => ES.InstanceOf(any, B.Uint32Array);
export const BigInt64Array = any => ES.InstanceOf(any, B.BigInt64Array);
export const BigUint64Array = any => ES.InstanceOf(any, B.BigUint64Array);
export const Float32Array = any => ES.InstanceOf(any, B.Float32Array);
export const Float64Array = any => ES.InstanceOf(any, B.Float64Array);

const _NaN = B.isNaN;
const _Array = Array.isArray;

export {
	_NaN as NaN,
	_Array as Array,
};

export * as Type from './Type.mjs';
