import { BigUint64Array } from '../Global.mjs';
import { Bind, Caller, Getter } from '../Accessor/index.mjs';

export const from = Bind(BigUint64Array, Caller.from);
export const of = Bind(BigUint64Array, Caller.of);
export const BYTES_PER_ELEMENT = Getter.BYTES_PER_ELEMENT(BigUint64Array);
