type Constructor<
	T extends abstract new (...args: any) => any
> = (
	...args: ConstructorParameters<T>
) => InstanceType<T>;

export const Object: Constructor<ObjectConstructor>;
export const Function: Constructor<FunctionConstructor>;
export const Boolean: Constructor<BooleanConstructor>;
export const Number: Constructor<NumberConstructor>;
export const String: Constructor<StringConstructor>;

export const Error: Constructor<ErrorConstructor>;
export const AggregateError: () => {};
export const EvalError: Constructor<EvalErrorConstructor>;
export const RangeError: Constructor<RangeErrorConstructor>;
export const ReferenceError: Constructor<ReferenceErrorConstructor>;
export const SyntaxError: Constructor<SyntaxErrorConstructor>;
export const TypeError: Constructor<TypeErrorConstructor>;
export const URIError: Constructor<URIErrorConstructor>;

export const Date: Constructor<DateConstructor>;
export const RegExp: Constructor<RegExpConstructor>;
export const Array: (arrayLength: number) => [];

export const Map: Constructor<MapConstructor>;
export const Set: Constructor<SetConstructor>;
export const WeakMap: Constructor<WeakMapConstructor>;
export const WeakSet: Constructor<WeakSetConstructor>;
export const WeakRef: Constructor<WeakRefConstructor>;
export const FinalizationRegistry: Constructor<FinalizationRegistryConstructor>;

export const ArrayBuffer: Constructor<ArrayBufferConstructor>;
export const SharedArrayBuffer: Constructor<SharedArrayBufferConstructor>;
export const DataView: Constructor<DataViewConstructor>;

export const Promise: Constructor<PromiseConstructor>;
export const Proxy: Constructor<ProxyConstructor>;

export const Int8Array: Constructor<Int8ArrayConstructor>;
export const Uint8Array: Constructor<Uint8ArrayConstructor>;
export const Uint8ClampedArray: Constructor<Uint8ClampedArrayConstructor>;
export const Int16Array: Constructor<Int16ArrayConstructor>;
export const Uint16Array: Constructor<Uint16ArrayConstructor>;
export const Int32Array: Constructor<Int32ArrayConstructor>;
export const Uint32Array: Constructor<Uint32ArrayConstructor>;
export const BigInt64Array: Constructor<BigInt64ArrayConstructor>;
export const BigUint64Array: Constructor<BigUint64ArrayConstructor>;
export const Float32Array: Constructor<Float32ArrayConstructor>;
export const Float64Array: Constructor<Float64ArrayConstructor>;
