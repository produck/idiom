import { Uint16Array } from './Global.mjs';
import { getBytesPerElement } from './TypedArray.mjs';

export const from = Uint16Array.from;
export const of = Uint16Array.of;
export const BYTES_PER_ELEMENT = getBytesPerElement(Uint16Array);
