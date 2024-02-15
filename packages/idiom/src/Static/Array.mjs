import { Array } from '../Global.mjs';
import { Getter } from '../Accessor/index.mjs';

export const of = Getter.of(Array);
export const from = Getter.from(Array);
export const fromAsync = Getter.fromAsync(Array);
export const isArray = Getter.isArray(Array);
