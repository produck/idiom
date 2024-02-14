import { BigInt64Array } from './Global.mjs';
import { getBytesPerElement } from './TypedArray.mjs';

export const from = BigInt64Array.from;
export const of = BigInt64Array.of;
export const BYTES_PER_ELEMENT = getBytesPerElement(BigInt64Array);
