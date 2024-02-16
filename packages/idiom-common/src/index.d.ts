export * from '@produck/idiom';

export module Is {
	type Validator = (any: any) => boolean;

	export const BigIntType: Validator;
	export const BooleanType: Validator;
	export const FunctionType: Validator;
	export const NumberType: Validator;
	export const ObjectType: Validator;
	export const StringType: Validator;
	export const SymbolType: Validator;
	export const UndefinedType: Validator;
	export const Null: Validator;
	export const Finite: Validator;
	export const Integer: Validator;
	export const SafeInteger: Validator;
	export const Array: Validator;
	export const Date: Validator;
	export const RegExp: Validator;
	export const Map: Validator;
	export const Set: Validator;
	export const WeakMap: Validator;
	export const WeakSet: Validator;
	export const WeakRef: Validator;
	export const ArrayBuffer: Validator;
	export const SharedArrayBuffer: Validator;
	export const DataView: Validator;
	export const FinalizationRegistry: Validator;
	export const Promise: Validator;
	export const GeneratorFunction: Validator;
	export const AsyncGeneratorFunction: Validator;
	export const AsyncFunction: Validator;
	export const Error: Validator;
	export const AggregateError: Validator;
	export const EvalError: Validator;
	export const RangeError: Validator;
	export const ReferenceError: Validator;
	export const TypeError: Validator;
	export const URIError: Validator;
	export const TypedArray: Validator;
	export const Int8Array: Validator;
	export const Uint8Array: Validator;
	export const Uint8ClampedArray: Validator;
	export const Int16Array: Validator;
	export const Uint16Array: Validator;
	export const Int32Array: Validator;
	export const Uint32Array: Validator;
	export const BigInt64Array: Validator;
	export const BigUint64Array: Validator;
	export const Float32Array: Validator;
	export const Float64Array: Validator;
}

export module Error {
	type Newable = (...args: any) => Error;
	export type Thrower = (message: string) => never;

	export function Thrower(New: Newable): Thrower;

	export const ThrowError: Thrower;
	export const ThrowEvalError: Thrower;
	export const ThrowRangeError: Thrower;
	export const ThrowReferenceError: Thrower;
	export const ThrowSyntaxError: Thrower;
	export const ThrowTypeError: Thrower;
	export const ThrowURIError: Thrower;

	export { ThrowError as Throw };

	export function TypeErrorMessage(role: string, expected: string): string;
	export function ThrowTemplatedTypeError(role: string, expected: string): never;
}

export module Assert {
	type Assertor = (value: any, role: string, expected?: string) => unknown;

	export const Array: Assertor;
	export const BigIntType: Assertor;
	export const BooleanType: Assertor;
	export const FunctionType: Assertor;
	export const NumberType: Assertor;
	export const ObjectType: Assertor;
	export const StringType: Assertor;
	export const SymbolType: Assertor;
	export const UndefinedType: Assertor;
	export const Null: Assertor;
	export const Finite: Assertor;
	export const Integer: Assertor;
	export const SafeInteger: Assertor;
	export const Date: Assertor;
	export const RegExp: Assertor;
	export const Map: Assertor;
	export const Set: Assertor;
	export const WeakMap: Assertor;
	export const WeakSet: Assertor;
	export const WeakRef: Assertor;
	export const ArrayBuffer: Assertor;
	export const SharedArrayBuffer: Assertor;
	export const DataView: Assertor;
	export const FinalizationRegistry: Assertor;
	export const Promise: Assertor;
	export const GeneratorFunction: Assertor;
	export const AsyncGeneratorFunction: Assertor;
	export const AsyncFunction: Assertor;
	export const Error: Assertor;
	export const AggregateError: Assertor;
	export const EvalError: Assertor;
	export const RangeError: Assertor;
	export const ReferenceError: Assertor;
	export const TypeError: Assertor;
	export const URIError: Assertor;
	export const TypedArray: Assertor;
	export const Int8Array: Assertor;
	export const Uint8Array: Assertor;
	export const Uint8ClampedArray: Assertor;
	export const Int16Array: Assertor;
	export const Uint16Array: Assertor;
	export const Int32Array: Assertor;
	export const Uint32Array: Assertor;
	export const BigInt64Array: Assertor;
	export const BigUint64Array: Assertor;
	export const Float32Array: Assertor;
	export const Float64Array: Assertor;
}
