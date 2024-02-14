import { Float32Array } from './Global.mjs';
import { getBytesPerElement } from './TypedArray.mjs';

export const from = Float32Array.from;
export const of = Float32Array.of;
export const BYTES_PER_ELEMENT = getBytesPerElement(Float32Array);
