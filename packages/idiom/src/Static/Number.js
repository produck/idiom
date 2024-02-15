import { Number } from '../Global.mjs';
import { Getter } from '../Accessor/index.mjs';

export const EPSILON = Getter.EPSILON(Number);
export const MAX_SAFE_INTEGER = Getter.MAX_SAFE_INTEGER(Number);
export const MAX_VALUE = Getter.MAX_VALUE(Number);
export const MIN_SAFE_INTEGER = Getter.MIN_SAFE_INTEGER(Number);
export const MIN_VALUE = Getter.MIN_VALUE(Number);
export const NEGATIVE_INFINITY = Getter.NEGATIVE_INFINITY(Number);
export const POSITIVE_INFINITY = Getter.POSITIVE_INFINITY(Number);

export const isInteger = Getter.isInteger(Number);
export const isSafeInteger = Getter.isSafeInteger(Number);
export { isFinite, isNaN, parseFloat, parseInt, NaN } from '../Global.mjs';
