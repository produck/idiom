import { BigInt64Array } from '../Global.mjs';
import { Bind, Caller, Getter } from '../Accessor/index.mjs';

export const from = Bind(BigInt64Array, Caller.from);
export const of = Bind(BigInt64Array, Caller.of);
export const BYTES_PER_ELEMENT = Getter.BYTES_PER_ELEMENT(BigInt64Array);
