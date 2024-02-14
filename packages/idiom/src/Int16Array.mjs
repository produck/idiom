import { Int16Array } from './Global.mjs';
import { getBytesPerElement } from './TypedArray.mjs';

export const from = Int16Array.from;
export const of = Int16Array.of;
export const BYTES_PER_ELEMENT = getBytesPerElement(Int16Array);
