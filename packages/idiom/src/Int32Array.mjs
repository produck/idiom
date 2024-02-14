import { Int32Array } from './Global.mjs';
import { getBytesPerElement } from './TypedArray.mjs';

export const from = Int32Array.from;
export const of = Int32Array.of;
export const BYTES_PER_ELEMENT = getBytesPerElement(Int32Array);
