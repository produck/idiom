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
	export const Array: Error.Thrower;
	export const BigIntType: Error.Thrower;
	export const BooleanType: Error.Thrower;
	export const FunctionType: Error.Thrower;
	export const NumberType: Error.Thrower;
	export const ObjectType: Error.Thrower;
	export const StringType: Error.Thrower;
	export const SymbolType: Error.Thrower;
	export const UndefinedType: Error.Thrower;
	export const Null: Error.Thrower;
	export const Finite: Error.Thrower;
	export const Integer: Error.Thrower;
	export const SafeInteger: Error.Thrower;
	export const Date: Error.Thrower;
	export const RegExp: Error.Thrower;
	export const Map: Error.Thrower;
	export const Set: Error.Thrower;
	export const WeakMap: Error.Thrower;
	export const WeakSet: Error.Thrower;
	export const WeakRef: Error.Thrower;
	export const ArrayBuffer: Error.Thrower;
	export const SharedArrayBuffer: Error.Thrower;
	export const DataView: Error.Thrower;
	export const FinalizationRegistry: Error.Thrower;
	export const Promise: Error.Thrower;
	export const GeneratorFunction: Error.Thrower;
	export const AsyncGeneratorFunction: Error.Thrower;
	export const AsyncFunction: Error.Thrower;
	export const Error: Error.Thrower;
	export const AggregateError: Error.Thrower;
	export const EvalError: Error.Thrower;
	export const RangeError: Error.Thrower;
	export const ReferenceError: Error.Thrower;
	export const TypeError: Error.Thrower;
	export const URIError: Error.Thrower;
	export const TypedArray: Error.Thrower;
	export const Int8Array: Error.Thrower;
	export const Uint8Array: Error.Thrower;
	export const Uint8ClampedArray: Error.Thrower;
	export const Int16Array: Error.Thrower;
	export const Uint16Array: Error.Thrower;
	export const Int32Array: Error.Thrower;
	export const Uint32Array: Error.Thrower;
	export const BigInt64Array: Error.Thrower;
	export const BigUint64Array: Error.Thrower;
	export const Float32Array: Error.Thrower;
	export const Float64Array: Error.Thrower;
}
