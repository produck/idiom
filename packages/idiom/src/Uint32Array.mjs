import { Uint32Array } from './Global.mjs';
import { getBytesPerElement } from './TypedArray.mjs';

export const from = Uint32Array.from;
export const of = Uint32Array.of;
export const BYTES_PER_ELEMENT = getBytesPerElement(Uint32Array);
