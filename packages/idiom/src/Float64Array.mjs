import { Float64Array } from './Global.mjs';
import { getBytesPerElement } from './TypedArray.mjs';

export const from = Float64Array.from;
export const of = Float64Array.of;
export const BYTES_PER_ELEMENT = getBytesPerElement(Float64Array);
