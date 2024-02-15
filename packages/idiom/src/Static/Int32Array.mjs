import { Int32Array } from '../Global.mjs';
import { Bind, Caller, Getter } from '../Accessor/index.mjs';

export const from = Bind(Int32Array, Caller.from);
export const of = Bind(Int32Array, Caller.of);
export const BYTES_PER_ELEMENT = Getter.BYTES_PER_ELEMENT(Int32Array);
