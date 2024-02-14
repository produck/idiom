import { Uint8ClampedArray } from './Global.mjs';
import { getBytesPerElement } from './TypedArray.mjs';

export const from = Uint8ClampedArray.from;
export const of = Uint8ClampedArray.of;
export const BYTES_PER_ELEMENT = getBytesPerElement(Uint8ClampedArray);
