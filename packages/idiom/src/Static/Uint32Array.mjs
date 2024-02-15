import { Uint32Array } from '../Global.mjs';
import { Bind, Caller, Getter } from '../Accessor/index.mjs';

export const from = Bind(Uint32Array, Caller.from);
export const of = Bind(Uint32Array, Caller.of);
export const BYTES_PER_ELEMENT = Getter.BYTES_PER_ELEMENT(Uint32Array);
