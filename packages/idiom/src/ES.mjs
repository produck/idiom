import { LITERAL } from './Literal.mjs';

export const NULL = LITERAL[0];
export const TRUE = LITERAL[1];
export const FALSE = LITERAL[2];
export const TypeOf = operand => typeof operand;
export const InstanceOf = (object, Constructor) => object instanceof Constructor;
export const Throw = any => { throw any; };

export {
	NULL as null,
	TRUE as true,
	FALSE as false,
};
