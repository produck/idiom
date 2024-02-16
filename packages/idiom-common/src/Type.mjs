import { TypeOf, InstanceOf, NULL, B, S } from '@produck/idiom';

const TypeOfEquel = (any, type) => TypeOf(any) === type;

export const isArray = S.Array.isArray;
export const isBigInt = any => TypeOfEquel(any, 'bigint');
export const isBoolean = any => TypeOfEquel(any, 'boolean');
export const isFunction = any => TypeOfEquel(any, 'function');
export const isNumber = any => TypeOfEquel(any, 'number');
export const isObject = any => TypeOfEquel(any, 'object');
export const isString = any => TypeOfEquel(any, 'string');
export const isSymbol = any => TypeOfEquel(any, 'symbol');

export const isUndefined = any => any === B.undefined;
export const isNull = any => any === NULL;
export const isNaN = S.Number.isNaN;
export const isFinite = S.Number.isFinite;
export const isInteger = S.Number.isInteger;
export const isSafeInteger = S.Number.isSafeInteger;

export const isDate = any => InstanceOf(any, B.Date);
export const isRegExp = any => InstanceOf(any, B.RegExp);
export const isMap = any => InstanceOf(any, B.Map);
export const isSet = any => InstanceOf(any, B.Set);
export const isWeakMap = any => InstanceOf(any, B.WeakMap);
export const isWeakSet = any => InstanceOf(any, B.WeakSet);
export const isWeakRef = any => InstanceOf(any, B.WeakRef);
export const isArrayBuffer = any => InstanceOf(any, B.ArrayBuffer);
export const isSharedArrayBuffer = any => InstanceOf(any, B.SharedArrayBuffer);
export const isDataView = any => InstanceOf(any, B.DataView);
export const isFinalizationRegistry = any => InstanceOf(any, B.FinalizationRegistry);
export const isPromise = any => InstanceOf(any, B.Promise);
export const isGeneratorFunction = any => InstanceOf(any, B.GeneratorFunction);
export const isAsyncGeneratorFunction = any => InstanceOf(any, B.AsyncGeneratorFunction);
export const isAsyncFunction = any => InstanceOf(any, B.AsyncFunction);

export const isError = any => InstanceOf(any, B.Error);
export const isAggregateError = any => InstanceOf(any, B.AggregateError);
export const isEvalError = any => InstanceOf(any, B.EvalError);
export const isRangeError = any => InstanceOf(any, B.RangeError);
export const isReferenceError = any => InstanceOf(any, B.ReferenceError);
export const isTypeError = any => InstanceOf(any, B.TypeError);
export const isURIError = any => InstanceOf(any, B.URIError);

export const isTypedArray = any => InstanceOf(any, B.TypedArray);
export const isInt8Array = any => InstanceOf(any, B.Int8Array);
export const isUint8Array = any => InstanceOf(any, B.Uint8Array);
export const isUint8ClampedArray = any => InstanceOf(any, B.Uint8ClampedArray);
export const isInt16Array = any => InstanceOf(any, B.Int16Array);
export const isUint16Array = any => InstanceOf(any, B.Uint16Array);
export const isInt32Array = any => InstanceOf(any, B.Int32Array);
export const isUint32Array = any => InstanceOf(any, B.Uint32Array);
export const isBigInt64Array = any => InstanceOf(any, B.BigInt64Array);
export const isBigUint64Array = any => InstanceOf(any, B.BigUint64Array);
export const isFloat32Array = any => InstanceOf(any, B.Float32Array);
export const isFloat64Array = any => InstanceOf(any, B.Float64Array);
