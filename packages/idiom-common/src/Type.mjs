import { TypeOf, Null, BuiltIn, InstanceOf, Array, Number } from '@produck/idiom';

const {
	Date, Error, AggregateError, EvalError, RangeError, ReferenceError,
	TypeError, URIError, RegExp, TypedArray, Int8Array, Uint8Array,
	Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array,
	BigInt64Array, BigUint64Array, Float32Array, Float64Array, Map, Set,
	WeakMap, WeakSet, WeakRef, ArrayBuffer, SharedArrayBuffer, DataView,
	FinalizationRegistry, Promise, GeneratorFunction, AsyncGeneratorFunction,
	AsyncFunction,
} = BuiltIn;

const TypeOfEquel = (any, type) => TypeOf(any) === type;

export const isArray = Array.isArray;
export const isBigInt = any => TypeOfEquel(any, 'bigint');
export const isBoolean = any => TypeOfEquel(any, 'boolean');
export const isFunction = any => TypeOfEquel(any, 'function');
export const isNumber = any => TypeOfEquel(any, 'number');
export const isObject = any => TypeOfEquel(any, 'object');
export const isString = any => TypeOfEquel(any, 'string');
export const isSymbol = any => TypeOfEquel(any, 'symbol');

export const isUndefined = any => any === Global.undefined;
export const isNull = any => any === Null;
export const isNaN = Number.isNaN;
export const isFinite = Number.isFinite;
export const isInteger = Number.isInteger;
export const isSafeInteger = Number.isSafeInteger;

export const isDate = any => InstanceOf(any, Date);
export const isRegExp = any => InstanceOf(any, RegExp);
export const isMap = any => InstanceOf(any, Map);
export const isSet = any => InstanceOf(any, Set);
export const isWeakMap = any => InstanceOf(any, WeakMap);
export const isWeakSet = any => InstanceOf(any, WeakSet);
export const isWeakRef = any => InstanceOf(any, WeakRef);
export const isArrayBuffer = any => InstanceOf(any, ArrayBuffer);
export const isSharedArrayBuffer = any => InstanceOf(any, SharedArrayBuffer);
export const isDataView = any => InstanceOf(any, DataView);
export const isFinalizationRegistry = any => InstanceOf(any, FinalizationRegistry);
export const isPromise = any => InstanceOf(any, Promise);
export const isGeneratorFunction = any => InstanceOf(any, GeneratorFunction);
export const isAsyncGeneratorFunction = any => InstanceOf(any, AsyncGeneratorFunction);
export const isAsyncFunction = any => InstanceOf(any, AsyncFunction);

export const isError = any => InstanceOf(any, Error);
export const isAggregateError = any => InstanceOf(any, AggregateError);
export const isEvalError = any => InstanceOf(any, EvalError);
export const isRangeError = any => InstanceOf(any, RangeError);
export const isReferenceError = any => InstanceOf(any, ReferenceError);
export const isTypeError = any => InstanceOf(any, TypeError);
export const isURIError = any => InstanceOf(any, URIError);

export const isTypedArray = any => InstanceOf(any, TypedArray);
export const isInt8Array = any => InstanceOf(any, Int8Array);
export const isUint8Array = any => InstanceOf(any, Uint8Array);
export const isUint8ClampedArray = any => InstanceOf(any, Uint8ClampedArray);
export const isInt16Array = any => InstanceOf(any, Int16Array);
export const isUint16Array = any => InstanceOf(any, Uint16Array);
export const isInt32Array = any => InstanceOf(any, Int32Array);
export const isUint32Array = any => InstanceOf(any, Uint32Array);
export const isBigInt64Array = any => InstanceOf(any, BigInt64Array);
export const isBigUint64Array = any => InstanceOf(any, BigUint64Array);
export const isFloat32Array = any => InstanceOf(any, Float32Array);
export const isFloat64Array = any => InstanceOf(any, Float64Array);
