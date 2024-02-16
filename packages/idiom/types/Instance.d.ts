export type Functional<
	T extends object,
	K extends keyof T,
> = T[K] extends (...args: any) => any
	? (o: T, ...args: Parameters<T[K]>) => ReturnType<T[K]>
	: (o: T) => T[K];

export type Namespace<T extends object> = {
	[key in keyof T]: Functional<T, key>
}

type TypedArray = typeof Object & Namespace<Int8Array>;

export const AggregateError: typeof Error & Namespace<AggregateError>;
export const Array: typeof Object & Namespace<Array<any>>;
export const ArrayBuffer: typeof Object & Namespace<ArrayBuffer>;
export const AsyncFunction: typeof Function;
export const AsyncGenerator: typeof Object & Namespace<AsyncGenerator>;
export const AsyncGeneratorFunction: typeof Function;
export const BigInt: typeof Object & Namespace<BigInt>;
export const BigInt64Array: TypedArray;
export const BigUint64Array: TypedArray;
export const Boolean: typeof Object & Namespace<Boolean>;
export const DataView: typeof Object & Namespace<DataView>;
export const Date: typeof Object & Namespace<Date>;
export const Error: typeof Object & Namespace<Error>;
export const EvalError: typeof Error & Namespace<EvalError>;
export const FinalizationRegistry: typeof Object & Namespace<FinalizationRegistry<any>>;
export const Float32Array: TypedArray;
export const Float64Array: TypedArray;
export const Function: typeof Object & Namespace<Function>;
export const Generator: typeof Object & Namespace<Generator>;
export const GeneratorFunction: typeof Object & Namespace<GeneratorFunction>;
export const Int16Array: TypedArray;
export const Int32Array: TypedArray;
export const Int8Array: TypedArray;
export const Map: typeof Object & Namespace<Map<any, any>>;
export const Number: typeof Object & Namespace<Number>;
export const Object: Namespace<Object>;
export const Promise: typeof Object & Namespace<Promise<any>>;
export const RangeError: typeof Error & Namespace<RangeError>;
export const ReferenceError: typeof Error & Namespace<ReferenceError>;
export const RegExp: typeof Object & Namespace<RegExp>;
export const Set: typeof Object & Namespace<Set<any>>;
export const SharedArrayBuffer: typeof Object & Namespace<SharedArrayBuffer>;
export const String: typeof Object & Namespace<String>;
export const Symbol: typeof Object & Namespace<Symbol>;
export const SyntaxError: typeof Error & Namespace<SyntaxError>;
export const TypeError: typeof Error & Namespace<TypeError>;
export const Uint16Array: TypedArray;
export const Uint32Array: TypedArray;
export const Uint8Array: TypedArray;
export const URIError: typeof Error & Namespace<URIError>;
export const WeakMap: typeof Object & Namespace<WeakMap<any, any>>;
export const WeakRef: typeof Object & Namespace<WeakRef<any>>;
export const WeakSet: typeof Object & Namespace<WeakSet<any>>;
