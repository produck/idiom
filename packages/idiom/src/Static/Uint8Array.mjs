import { Uint8Array } from '../Global.mjs';
import { Bind, Caller, Getter } from '../Accessor/index.mjs';

export const from = Bind(Uint8Array, Caller.from);
export const of = Bind(Uint8Array, Caller.of);
export const BYTES_PER_ELEMENT = Getter.BYTES_PER_ELEMENT(Uint8Array);
