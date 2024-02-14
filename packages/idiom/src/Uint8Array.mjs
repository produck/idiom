import { Uint8Array } from './Global.mjs';
import { getBytesPerElement } from './TypedArray.mjs';

export const from = Uint8Array.from;
export const of = Uint8Array.of;
export const BYTES_PER_ELEMENT = getBytesPerElement(Uint8Array);
