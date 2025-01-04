type TypedArray =
| Int8Array
| Uint8Array
| Uint8ClampedArray
| Int16Array
| Uint16Array
| Int32Array
| Uint32Array
| BigInt64Array
| BigUint64Array
| Float32Array
| Float64Array

export namespace Is {
	type Validator<T> = (any: T) => any is T;

	export namespace Type {
		export const BigInt: Validator<bigint>;
		export const Boolean: Validator<boolean>;
		export const Function: Validator<(...any: unknown[]) => unknown>;
		export const Number: Validator<number>;
		export const Object: Validator<object>;
		export const String: Validator<string>;
		export const Symbol: Validator<symbol>;
		export const Undefined: Validator<undefined>;
	}

	export const Null: Validator<null>;
	export const Finite: Validator<number>;
	export const Integer: Validator<number>;
	export const SafeInteger: Validator<number>;

	export const Array: Validator<unknown[]>;
	export const Date: Validator<Date>;
	export const RegExp: Validator<RegExp>;
	export const Map: Validator<Map<unknown, unknown>>;
	export const Set: Validator<Set<unknown>>;
	export const WeakMap: Validator<WeakMap<WeakKey, unknown>>;
	export const WeakSet: Validator<WeakSet<WeakKey>>;
	export const WeakRef: Validator<WeakRef<WeakKey>>;
	export const ArrayBuffer: Validator<ArrayBuffer>;
	export const DataView: Validator<DataView>;
	export const FinalizationRegistry: Validator<FinalizationRegistry<unknown>>;
	export const Promise: Validator<Promise<unknown>>;
	export const GeneratorFunction: Validator<GeneratorFunction>;
	export const AsyncGeneratorFunction: Validator<AsyncGeneratorFunction>;
	export const AsyncFunction: Validator<(...any: unknown[]) => Promise<unknown>>;

	export const Error: Validator<Error>;
	export const AggregateError: Validator<AggregateError>;
	export const EvalError: Validator<EvalError>;
	export const RangeError: Validator<RangeError>;
	export const ReferenceError: Validator<ReferenceError>;
	export const TypeError: Validator<TypeError>;
	export const URIError: Validator<URIError>;

	export const TypedArray: Validator<TypedArray>;
	export const Int8Array: Validator<Int8Array>;
	export const Uint8Array: Validator<Uint8Array>;
	export const Uint8ClampedArray: Validator<Uint8ClampedArray>;
	export const Int16Array: Validator<Int16Array>;
	export const Uint16Array: Validator<Uint16Array>;
	export const Int32Array: Validator<Int32Array>;
	export const Uint32Array: Validator<Uint32Array>;
	export const BigInt64Array: Validator<BigInt64Array>;
	export const BigUint64Array: Validator<BigUint64Array>;
	export const Float32Array: Validator<Float32Array>;
	export const Float64Array: Validator<Float64Array>;

	const _NaN: Validator<number>;
	export { _NaN as NaN };
}

export namespace Assert {
	type Assert<T = unknown> = (
		value: unknown,
		role: string,
		expected?: string
	) => asserts value is T;

	export namespace Type {
		export const BigInt: Assert<bigint>;
		export const Boolean: Assert<boolean>;
		export const Function: Assert<(...any: unknown[]) => unknown>;
		export const Number: Assert<number>;
		export const Object: Assert<object>;
		export const String: Assert<string>;
		export const Symbol: Assert<symbol>;
		export const Undefined: Assert<undefined>;
	}

	export const Array: Assert<unknown[]>;
	export const Null: Assert<null>;
	export const Finite: Assert<number>;
	export const Integer: Assert<number>;
	export const SafeInteger: Assert<number>;
	export const Date: Assert<Date>;
	export const RegExp: Assert<RegExp>;
	export const Map: Assert<Map<unknown, unknown>>;
	export const Set: Assert<Set<unknown>>;
	export const WeakMap: Assert<WeakMap<WeakKey, unknown>>;
	export const WeakSet: Assert<WeakSet<WeakKey>>;
	export const WeakRef: Assert<WeakRef<WeakKey>>;
	export const ArrayBuffer: Assert<ArrayBuffer>;
	export const DataView: Assert<DataView>;
	export const FinalizationRegistry: Assert<FinalizationRegistry<unknown>>;
	export const Promise: Assert<Promise<unknown>>;
	export const GeneratorFunction: Assert<GeneratorFunction>;
	export const AsyncGeneratorFunction: Assert<AsyncGeneratorFunction>;
	export const AsyncFunction: Assert<(...any: unknown[]) => Promise<unknown>>;
	export const Error: Assert<Error>;
	export const AggregateError: Assert<AggregateError>;
	export const EvalError: Assert<EvalError>;
	export const RangeError: Assert<RangeError>;
	export const ReferenceError: Assert<ReferenceError>;
	export const TypeError: Assert<TypeError>;
	export const URIError: Assert<URIError>;
	export const TypedArray: Assert<TypedArray>;
	export const Int8Array: Assert<Int8Array>;
	export const Uint8Array: Assert<Uint8Array>;
	export const Uint8ClampedArray: Assert<Uint8ClampedArray>;
	export const Int16Array: Assert<Int16Array>;
	export const Uint16Array: Assert<Uint16Array>;
	export const Int32Array: Assert<Int32Array>;
	export const Uint32Array: Assert<Uint32Array>;
	export const BigInt64Array: Assert<BigInt64Array>;
	export const BigUint64Array: Assert<BigUint64Array>;
	export const Float32Array: Assert<Float32Array>;
	export const Float64Array: Assert<Float64Array>;
}
