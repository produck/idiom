import { TypeOf, InstanceOf, NULL, B, S } from '@produck/idiom';

const TypeOfEquel = (any, type) => TypeOf(any) === type;

export const BigIntType = any => TypeOfEquel(any, 'bigint');
export const BooleanType = any => TypeOfEquel(any, 'boolean');
export const FunctionType = any => TypeOfEquel(any, 'function');
export const NumberType = any => TypeOfEquel(any, 'number');
export const ObjectType = any => TypeOfEquel(any, 'object');
export const StringType = any => TypeOfEquel(any, 'string');
export const SymbolType = any => TypeOfEquel(any, 'symbol');

export const UndefinedType = any => any === B.undefined;
export const Null = any => any === NULL;
export const Finite = S.Number.isFinite;
export const Integer = S.Number.isInteger;
export const SafeInteger = S.Number.isSafeInteger;

export const Array = S.Array.isArray;
export const Date = any => InstanceOf(any, B.Date);
export const RegExp = any => InstanceOf(any, B.RegExp);
export const Map = any => InstanceOf(any, B.Map);
export const Set = any => InstanceOf(any, B.Set);
export const WeakMap = any => InstanceOf(any, B.WeakMap);
export const WeakSet = any => InstanceOf(any, B.WeakSet);
export const WeakRef = any => InstanceOf(any, B.WeakRef);
export const ArrayBuffer = any => InstanceOf(any, B.ArrayBuffer);
export const SharedArrayBuffer = any => InstanceOf(any, B.SharedArrayBuffer);
export const DataView = any => InstanceOf(any, B.DataView);
export const FinalizationRegistry = any => InstanceOf(any, B.FinalizationRegistry);
export const Promise = any => InstanceOf(any, B.Promise);
export const GeneratorFunction = any => InstanceOf(any, B.GeneratorFunction);
export const AsyncGeneratorFunction = any => InstanceOf(any, B.AsyncGeneratorFunction);
export const AsyncFunction = any => InstanceOf(any, B.AsyncFunction);

export const Error = any => InstanceOf(any, B.Error);
export const AggregateError = any => InstanceOf(any, B.AggregateError);
export const EvalError = any => InstanceOf(any, B.EvalError);
export const RangeError = any => InstanceOf(any, B.RangeError);
export const ReferenceError = any => InstanceOf(any, B.ReferenceError);
export const TypeError = any => InstanceOf(any, B.TypeError);
export const URIError = any => InstanceOf(any, B.URIError);

export const TypedArray = any => InstanceOf(any, B.TypedArray);
export const Int8Array = any => InstanceOf(any, B.Int8Array);
export const Uint8Array = any => InstanceOf(any, B.Uint8Array);
export const Uint8ClampedArray = any => InstanceOf(any, B.Uint8ClampedArray);
export const Int16Array = any => InstanceOf(any, B.Int16Array);
export const Uint16Array = any => InstanceOf(any, B.Uint16Array);
export const Int32Array = any => InstanceOf(any, B.Int32Array);
export const Uint32Array = any => InstanceOf(any, B.Uint32Array);
export const BigInt64Array = any => InstanceOf(any, B.BigInt64Array);
export const BigUint64Array = any => InstanceOf(any, B.BigUint64Array);
export const Float32Array = any => InstanceOf(any, B.Float32Array);
export const Float64Array = any => InstanceOf(any, B.Float64Array);
