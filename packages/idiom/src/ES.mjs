import { LITERAL } from './Literal.mjs';

export const Null = LITERAL[0];
export const True = LITERAL[1];
export const False = LITERAL[2];
export const TypeOf = operand => typeof operand;
export const InstanceOf = (object, Constructor) => object instanceof Constructor;
export const Throw = any => { throw any; };
