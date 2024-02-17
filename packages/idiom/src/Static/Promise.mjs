import { Promise } from '../Global.mjs';
import { Caller, Bind } from '../Accessor/index.mjs';

export const all = Bind(Promise, Caller.all);
export const allSettled = Bind(Promise, Caller.allSettled);
export const any = Bind(Promise, Caller.any);
export const race = Bind(Promise, Caller.race);
export const reject = Bind(Promise, Caller.reject);
export const resolve = Bind(Promise, Caller.resolve);
export const withResolvers = Bind(Promise, Caller.withResolvers);
