import { Symbol } from './Global.mjs';

export const asyncIterator = Symbol.asyncIterator;
export const hasInstance = Symbol.hasInstance;
export const isConcatSpreadable = Symbol.isConcatSpreadable;
export const iterator = Symbol.iterator;
export const match = Symbol.match;
export const matchAll = Symbol.matchAll;
export const replace = Symbol.replace;
export const search = Symbol.search;
export const species = Symbol.species;
export const split = Symbol.split;
export const toPrimitive = Symbol.toPrimitive;
export const toStringTag = Symbol.toStringTag;
export const unscopables = Symbol.unscopables;

const _for = Symbol.for;

export { _for as for };
export const  keyFor = Symbol.keyFor;
