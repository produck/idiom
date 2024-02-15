type TypeName =
	| "bigint"
	| "boolean"
	| "function"
	| "number"
	| "object"
	| "string"
	| "symbol"
	| "undefined";

export const Null: null;
export const True: true;
export const False: false;
export const TypeOf: (operand: any) => TypeName;
export const InstanceOf: (object: object, Constructor: Function) => boolean;
export const Throw: () => never;
