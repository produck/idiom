import { Promise } from '../Global.mjs';
import { Getter } from '../Accessor/index.mjs';

export const all = Getter.all(Promise);
export const allSettled = Getter.allSettled(Promise);
export const any = Getter.any(Promise);
export const race = Getter.race(Promise);
export const reject = Getter.reject(Promise);
export const resolve = Getter.resolve(Promise);
export const withResolvers = Getter.withResolvers(Promise);
