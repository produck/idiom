import * as Global from './Global.mjs';
import { Constructor } from './Accessor/Generator.mjs';

export const Object = Constructor(Global.Object);
export const Function = Constructor(Global.Function);
export const Boolean = Constructor(Global.Boolean);
export const Number = Constructor(Global.Number);
export const String = Constructor(Global.String);

export const Error = Constructor(Global.Error);
export const AggregateError = Constructor(Global.AggregateError);
export const EvalError = Constructor(Global.EvalError);
export const RangeError = Constructor(Global.RangeError);
export const ReferenceError = Constructor(Global.ReferenceError);
export const SyntaxError = Constructor(Global.SyntaxError);
export const TypeError = Constructor(Global.TypeError);
export const URIError = Constructor(Global.URIError);

export const Date = Constructor(Global.Date);
export const RegExp = Constructor(Global.RegExp);
export const Array = Constructor(Global.Array);

export const Map = Constructor(Global.Map);
export const Set = Constructor(Global.Set);
export const WeakMap = Constructor(Global.WeakMap);
export const WeakSet = Constructor(Global.WeakSet);
export const WeakRef = Constructor(Global.WeakRef);
export const FinalizationRegistry = Constructor(Global.FinalizationRegistry);

export const ArrayBuffer = Constructor(Global.ArrayBuffer);
export const SharedArrayBuffer = Constructor(Global.SharedArrayBuffer);
export const DataView = Constructor(Global.DataView);

export const Promise = Constructor(Global.Promise);
export const Proxy = Constructor(Global.Proxy);

export const Int8Array = Constructor(Global.Int8Array);
export const Uint8Array = Constructor(Global.Uint8Array);
export const Uint8ClampedArray = Constructor(Global.Uint8ClampedArray);
export const Int16Array = Constructor(Global.Int16Array);
export const Uint16Array = Constructor(Global.Uint16Array);
export const Int32Array = Constructor(Global.Int32Array);
export const Uint32Array = Constructor(Global.Uint32Array);
export const BigInt64Array = Constructor(Global.BigInt64Array);
export const BigUint64Array = Constructor(Global.BigUint64Array);
export const Float32Array = Constructor(Global.Float32Array);
export const Float64Array = Constructor(Global.Float64Array);
