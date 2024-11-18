import * as ES from '../ES.mjs';

const TypeOfEquel = (any, type) => ES.TypeOf(any) === type;

export const BigInt = any => TypeOfEquel(any, 'bigint');
export const Boolean = any => TypeOfEquel(any, 'boolean');
export const Function = any => TypeOfEquel(any, 'function');
export const Number = any => TypeOfEquel(any, 'number');
export const Object = any => TypeOfEquel(any, 'object');
export const String = any => TypeOfEquel(any, 'string');
export const Symbol = any => TypeOfEquel(any, 'symbol');
export const Undefined = any => TypeOfEquel(any, 'undefined');
