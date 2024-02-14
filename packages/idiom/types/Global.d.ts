declare const _globalThis: typeof globalThis;

declare const _eval: typeof eval;
declare const _isFinite: typeof isFinite;
declare const _isNaN: typeof isNaN;
declare const _parseFloat: typeof parseFloat;
declare const _parseInt: typeof parseInt;
declare const _decodeURI: typeof decodeURI;
declare const _decodeURIComponent: typeof decodeURIComponent;
declare const _encodeURI: typeof encodeURI;
declare const _encodeURIComponent: typeof encodeURIComponent;

declare const _Object: typeof Object;
declare const _Function: typeof Function;
declare const _Boolean: typeof Boolean;
declare const _Symbol: typeof Symbol;

interface AggregateError {
	errors: Error[];
}

interface AggregateErrorConstructor {
	new (
		errors: Error[],
		message?: string,
		options?: { cause?: any }
	): AggregateError;
}

declare const _Error: typeof Error;
declare const _AggregateError: AggregateErrorConstructor;
declare const _EvalError: typeof EvalError;
declare const _RangeError: typeof RangeError;
declare const _ReferenceError: typeof ReferenceError;
declare const _SyntaxError: typeof SyntaxError;
declare const _TypeError: typeof TypeError;
declare const _URIError: typeof URIError;

declare const _Number: typeof Number;
declare const _BigInt: typeof BigInt;
declare const _Math: typeof Math;
declare const _Date: typeof Date;

declare const _String: typeof String;
declare const _RegExp: typeof RegExp;

declare const _Array: typeof Array;
declare const _Int8Array: typeof Int8Array;
declare const _Uint8Array: typeof Uint8Array;
declare const _Uint8ClampedArray: typeof Uint8ClampedArray;
declare const _Int16Array: typeof Int16Array;
declare const _Uint16Array: typeof Uint16Array;
declare const _Int32Array: typeof Int32Array;
declare const _Uint32Array: typeof Uint32Array;
declare const _BigInt64Array: typeof BigInt64Array;
declare const _BigUint64Array: typeof BigUint64Array;
declare const _Float32Array: typeof Float32Array;
declare const _Float64Array: typeof Float64Array;

declare const _Map: typeof Map;
declare const _Set: typeof Set;
declare const _WeakMap: typeof WeakMap;
declare const _WeakSet: typeof WeakSet;

declare const _ArrayBuffer: typeof ArrayBuffer;
declare const _SharedArrayBuffer: typeof SharedArrayBuffer;
declare const _DataView: typeof DataView;
declare const _Atomics: typeof Atomics;
declare const _JSON: typeof JSON;

interface FinalizationRegistryConstructor {}

declare const _WeakRef: WeakRefConstructor;
declare const _FinalizationRegistry: FinalizationRegistryConstructor;

declare const _Promise: typeof Promise;

declare const _Reflect: typeof Reflect;
declare const _Proxy: typeof Proxy;

declare const _Intl: typeof Intl;

declare const _Infinity: number;
declare const _NaN: number;
declare const _undefined: undefined;

export {
	_globalThis as globalThis,
	_eval as eval,
	_isFinite as isFinite,
	_isNaN as isNaN,
	_parseFloat as parseFloat,
	_parseInt as parseInt,
	_decodeURI as decodeURI,
	_decodeURIComponent as decodeURIComponent,
	_encodeURI as encodeURI,
	_encodeURIComponent as encodeURIComponent,
	_Object as Object,
	_Function as Function,
	_Boolean as Boolean,
	_Symbol as Symbol,
	_Error as Error,
	_AggregateError as AggregateError,
	_EvalError as EvalError,
	_RangeError as RangeError,
	_ReferenceError as ReferenceError,
	_SyntaxError as SyntaxError,
	_TypeError as TypeError,
	_URIError as URIError,
	_Number as Number,
	_BigInt as BigInt,
	_Math as Math,
	_Date as Date,
	_String as String,
	_RegExp as RegExp,
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
	_Map as Map,
	_Set as Set,
	_WeakMap as WeakMap,
	_WeakSet as WeakSet,
	_ArrayBuffer as ArrayBuffer,
	_SharedArrayBuffer as SharedArrayBuffer,
	_DataView as DataView,
	_Atomics as Atomics,
	_JSON as JSON,
	_WeakRef as WeakRef,
	_FinalizationRegistry as FinalizationRegistry,
	_Promise as Promise,
	_Reflect as Reflect,
	_Proxy as Proxy,
	_Intl as Intl,
	_Infinity as Infinity,
	_NaN as NaN,
	_undefined as undefined,
};
