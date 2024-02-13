import { Atomics } from './Global.mjs';

export const add = Atomics.add;
export const and = Atomics.and;
export const compareExchange = Atomics.compareExchange;
export const isLockFree = Atomics.isLockFree;
export const load = Atomics.load;
export const notify = Atomics.notify;
export const or = Atomics.or;
export const store = Atomics.store;
export const sub = Atomics.sub;
export const wait = Atomics.wait;
export const waitAsync = Atomics.waitAsync;
export const xor = Atomics.xor;
