import { Uint16Array } from '../Global.mjs';
import { Bind, Caller, Getter } from '../Accessor/index.mjs';

export const from = Bind(Uint16Array, Caller.from);
export const of = Bind(Uint16Array, Caller.of);
export const BYTES_PER_ELEMENT = Getter.BYTES_PER_ELEMENT(Uint16Array);
