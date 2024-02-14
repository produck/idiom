import { BigUint64Array } from './Global.mjs';
import { getBytesPerElement } from './TypedArray.mjs';

export const from = BigUint64Array.from;
export const of = BigUint64Array.of;
export const BYTES_PER_ELEMENT = getBytesPerElement(BigUint64Array);
