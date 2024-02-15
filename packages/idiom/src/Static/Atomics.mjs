import { Atomics } from '../Global.mjs';
import { Getter } from '../Accessor/index.mjs';

export const add = Getter.add(Atomics);
export const and = Getter.and(Atomics);
export const compareExchange = Getter.compareExchange(Atomics);
export const isLockFree = Getter.isLockFree(Atomics);
export const load = Getter.load(Atomics);
export const notify = Getter.notify(Atomics);
export const or = Getter.or(Atomics);
export const store = Getter.store(Atomics);
export const sub = Getter.sub(Atomics);
export const wait = Getter.wait(Atomics);
export const waitAsync = Getter.waitAsync(Atomics);
export const xor = Getter.xor(Atomics);
