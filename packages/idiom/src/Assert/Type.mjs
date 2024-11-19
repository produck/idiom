import * as Is from '../Is/index.mjs';

import { Assert } from './AssertBuilder.mjs';

export const BigInt = Assert(Is.Type.BigInt, 'bigint');
export const Boolean = Assert(Is.Type.Boolean, 'boolean');
export const Function = Assert(Is.Type.Function, 'function');
export const Number = Assert(Is.Type.Number, 'number');
export const Object = Assert(Is.Type.Object, 'object');
export const String = Assert(Is.Type.String, 'string');
export const Symbol = Assert(Is.Type.Symbol, 'symbol');
export const Undefined = Assert(Is.Type.Undefined, 'undefined');
