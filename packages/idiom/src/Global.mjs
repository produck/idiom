// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Object
import { LITERAL } from './Literal.mjs';

// Value properties
const _globalThis = globalThis;

export {
	_globalThis as globalThis,
};

// Function properties
const _eval = eval;
const _isFinite = isFinite;
const _isNaN = isNaN;
const _parseFloat = parseFloat;
const _parseInt = parseInt;
const _decodeURI = decodeURI;
const _decodeURIComponent = decodeURIComponent;
const _encodeURI = encodeURI;
const _encodeURIComponent = encodeURIComponent;

export {
	_eval as eval,
	_isFinite as isFinite,
	_isNaN as isNaN,
	_parseFloat as parseFloat,
	_parseInt as parseInt,
	_decodeURI as decodeURI,
	_decodeURIComponent as decodeURIComponent,
	_encodeURI as encodeURI,
	_encodeURIComponent as encodeURIComponent,
};

// Fundamental objects
const _Object = Object;
const _Function = Function;
const _Boolean = Boolean;
const _Symbol = Symbol;

export {
	_Object as Object,
	_Function as Function,
	_Boolean as Boolean,
	_Symbol as Symbol,
};

// Error objects
const _Error = Error;
const _AggregateError = AggregateError;
const _EvalError = EvalError;
const _RangeError = RangeError;
const _ReferenceError = ReferenceError;
const _SyntaxError = SyntaxError;
const _TypeError = TypeError;
const _URIError = URIError;

export {
	_Error as Error,
	_AggregateError as AggregateError,
	_EvalError as EvalError,
	_RangeError as RangeError,
	_ReferenceError as ReferenceError,
	_SyntaxError as SyntaxError,
	_TypeError as TypeError,
	_URIError as URIError,
};

// Numbers and dates
const _Number = Number;
const _BigInt = BigInt;
const _Math = Math;
const _Date = Date;

export {
	_Number as Number,
	_BigInt as BigInt,
	_Math as Math,
	_Date as Date,
};

// Text processing
const _String = String;
const _RegExp = RegExp;

export {
	_String as String,
	_RegExp as RegExp,
};

// Indexed collections
const _Array = Array;
const _Int8Array = Int8Array;
const _Uint8Array = Uint8Array;
const _Uint8ClampedArray = Uint8ClampedArray;
const _Int16Array = Int16Array;
const _Uint16Array = Uint16Array;
const _Int32Array = Int32Array;
const _Uint32Array = Uint32Array;
const _BigInt64Array = BigInt64Array;
const _BigUint64Array = BigUint64Array;
const _Float32Array = Float32Array;
const _Float64Array = Float64Array;

export {
	_Array as Array,
	_Int8Array as Int8Array,
	_Uint8Array as Uint8Array,
	_Uint8ClampedArray as Uint8ClampedArray,
	_Int16Array as Int16Array,
	_Uint16Array as Uint16Array,
	_Int32Array as Int32Array,
	_Uint32Array as Uint32Array,
	_BigInt64Array as BigInt64Array,
	_BigUint64Array as BigUint64Array,
	_Float32Array as Float32Array,
	_Float64Array as Float64Array,
};

// Keyed collections
const _Map = Map;
const _Set = Set;
const _WeakMap = WeakMap;
const _WeakSet = WeakSet;

export {
	_Map as Map,
	_Set as Set,
	_WeakMap as WeakMap,
	_WeakSet as WeakSet,
};

// Structured data
const _ArrayBuffer = ArrayBuffer;
const _SharedArrayBuffer = SharedArrayBuffer;
const _DataView = DataView;
const _Atomics = Atomics;
const _JSON = JSON;

export {
	_ArrayBuffer as ArrayBuffer,
	_SharedArrayBuffer as SharedArrayBuffer,
	_DataView as DataView,
	_Atomics as Atomics,
	_JSON as JSON,
};

// Managing memory
const _WeakRef = WeakRef;
const _FinalizationRegistry = FinalizationRegistry;

export {
	_WeakRef as WeakRef,
	_FinalizationRegistry as FinalizationRegistry,
};

// Control abstraction objects
const _Promise = Promise;

export {
	_Promise as Promise,
};

// Reflection
const _Reflect = Reflect;
const _Proxy = Proxy;

export {
	_Reflect as Reflect,
	_Proxy as Proxy,
};

// Internationalization
const _Intl = Intl;

export {
	_Intl as Intl,
};

const _Infinity = _Number.POSITIVE_INFINITY;
const _NaN = _Number.NaN;
const _undefined = LITERAL[3];

export {
	_Infinity as Infinity,
	_NaN as NaN,
	_undefined as undefined,
};
