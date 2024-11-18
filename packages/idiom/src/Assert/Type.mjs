import * as Is from '../Is/index.mjs';

import { Assert } from './AssertBuilder.mjs';

export const BigInt = Assert(Is.Type.BigInt, 'BigInt');
export const Boolean = Assert(Is.Type.Boolean, 'Boolean');
export const Function = Assert(Is.Type.Function, 'Function');
export const Number = Assert(Is.Type.Number, 'Number');
export const Object = Assert(Is.Type.Object, 'Object');
export const String = Assert(Is.Type.String, 'String');
export const Symbol = Assert(Is.Type.Symbol, 'Symbol');
export const Undefined = Assert(Is.Type.Undefined, 'Undefined');
