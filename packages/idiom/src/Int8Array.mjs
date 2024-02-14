import { Int8Array } from './Global.mjs';
import { getBytesPerElement } from './TypedArray.mjs';

export const from = Int8Array.from;
export const of = Int8Array.of;
export const BYTES_PER_ELEMENT = getBytesPerElement(Int8Array);
