type PickStatic<T> = Omit<Pick<T, keyof T>, 'prototype' | symbol>;

export const Array: PickStatic<ArrayConstructor> & {
	fromAsync: ArrayConstructor["from"];
};

export const ArrayBuffer: PickStatic<ArrayBufferConstructor>;
export const Atomics: Atomics;
export const BigInt: PickStatic<BigIntConstructor>;
export const Date: PickStatic<DateConstructor>;
export const Number: PickStatic<NumberConstructor>;
export const Object: PickStatic<ObjectConstructor>;
export const Promise: PickStatic<PromiseConstructor>;
export const Proxy: PickStatic<ProxyConstructor>;
export const String: PickStatic<StringConstructor>;
export const Symbol: PickStatic<SymbolConstructor>;

export const BigInt64Array: PickStatic<BigInt64ArrayConstructor>;
export const BigUint64Array: PickStatic<BigUint64ArrayConstructor>;
export const Float32Array: PickStatic<Float32ArrayConstructor>;
export const Float64Array: PickStatic<Float64ArrayConstructor>;
export const Int8Array: PickStatic<Int8ArrayConstructor>;
export const Int16Array: PickStatic<Int16ArrayConstructor>;
export const Int32Array: PickStatic<Int32ArrayConstructor>;
export const Uint8Array: PickStatic<Uint8ArrayConstructor>;
export const Uint8ClampedArray: PickStatic<Uint8ClampedArrayConstructor>;
export const Uint16Array: PickStatic<Uint16ArrayConstructor>;
export const Uint32Array: PickStatic<Uint32ArrayConstructor>;

export { Intl, JSON, Math, Reflect } from './Global';
