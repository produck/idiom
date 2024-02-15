import { Symbol } from '../Global.mjs';
import { Getter } from '../Accessor/index.mjs';

export const asyncIterator = Getter.asyncIterator(Symbol);
export const hasInstance = Getter.hasInstance(Symbol);
export const isConcatSpreadable = Getter.isConcatSpreadable(Symbol);
export const iterator = Getter.iterator(Symbol);
export const match = Getter.match(Symbol);
export const matchAll = Getter.matchAll(Symbol);
export const replace = Getter.replace(Symbol);
export const search = Getter.search(Symbol);
export const species = Getter.species(Symbol);
export const split = Getter.split(Symbol);
export const toPrimitive = Getter.toPrimitive(Symbol);
export const toStringTag = Getter.toStringTag(Symbol);
export const unscopables = Getter.unscopables(Symbol);

const _for = Getter.for(Symbol);

export { _for as for };
export const  keyFor = Getter.keyFor(Symbol);
