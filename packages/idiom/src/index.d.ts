export namespace ES {
	type TypeName =
		| "bigint"
		| "boolean"
		| "function"
		| "number"
		| "object"
		| "string"
		| "symbol"
		| "undefined";

	export const TypeOf: (operand: any) => TypeName;
	export const InstanceOf: (object: object, Constructor: Function) => boolean;
}

export namespace Is {
	type Validator = (any: any) => boolean;

	export namespace Type {
		export const BigInt: Validator;
		export const Boolean: Validator;
		export const Function: Validator;
		export const Number: Validator;
		export const Object: Validator;
		export const String: Validator;
		export const Symbol: Validator;
		export const Undefined: Validator;
	}

	export const Null: Validator;
	export const Finite: Validator;
	export const Integer: Validator;
	export const SafeInteger: Validator;
	export const NaN: Validator;

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

export namespace Assert {
	type Assert = (value: any, role: string, expected?: string) => undefined | never;

	export namespace Type {
		export const BigInt: Assert;
		export const Boolean: Assert;
		export const Function: Assert;
		export const Number: Assert;
		export const Object: Assert;
		export const String: Assert;
		export const Symbol: Assert;
		export const Undefined: Assert;
	}

	export const Array: Assert;
	export const Null: Assert;
	export const Finite: Assert;
	export const Integer: Assert;
	export const SafeInteger: Assert;
	export const Date: Assert;
	export const RegExp: Assert;
	export const Map: Assert;
	export const Set: Assert;
	export const WeakMap: Assert;
	export const WeakSet: Assert;
	export const WeakRef: Assert;
	export const ArrayBuffer: Assert;
	export const SharedArrayBuffer: Assert;
	export const DataView: Assert;
	export const FinalizationRegistry: Assert;
	export const Promise: Assert;
	export const GeneratorFunction: Assert;
	export const AsyncGeneratorFunction: Assert;
	export const AsyncFunction: Assert;
	export const Error: Assert;
	export const AggregateError: Assert;
	export const EvalError: Assert;
	export const RangeError: Assert;
	export const ReferenceError: Assert;
	export const TypeError: Assert;
	export const URIError: Assert;
	export const TypedArray: Assert;
	export const Int8Array: Assert;
	export const Uint8Array: Assert;
	export const Uint8ClampedArray: Assert;
	export const Int16Array: Assert;
	export const Uint16Array: Assert;
	export const Int32Array: Assert;
	export const Uint32Array: Assert;
	export const BigInt64Array: Assert;
	export const BigUint64Array: Assert;
	export const Float32Array: Assert;
	export const Float64Array: Assert;
}
