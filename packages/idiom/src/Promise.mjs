import { Promise } from './Global.mjs';

export const all = Promise.all;
export const allSettled = Promise.allSettled;
export const any = Promise.any;
export const race = Promise.race;
export const reject = Promise.reject;
export const resolve = Promise.resolve;

// ES2023
export const withResolvers = Promise.withResolvers;
