type TypeName =
	| "bigint"
	| "boolean"
	| "function"
	| "number"
	| "object"
	| "string"
	| "symbol"
	| "undefined";

export const NULL: null;
export const TRUE: true;
export const FALSE: false;
export const TypeOf: (operand: any) => TypeName;
export const InstanceOf: (object: object, Constructor: Function) => boolean;
export const Throw: () => never;

export {
	NULL as null,
	TRUE as true,
	FALSE as false,
};
