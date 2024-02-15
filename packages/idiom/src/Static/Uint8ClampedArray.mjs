import { Uint8ClampedArray } from '../Global.mjs';
import { Bind, Caller, Getter } from '../Accessor/index.mjs';

export const from = Bind(Uint8ClampedArray, Caller.from);
export const of = Bind(Uint8ClampedArray, Caller.of);
export const BYTES_PER_ELEMENT = Getter.BYTES_PER_ELEMENT(Uint8ClampedArray);
