// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
import { Reflect } from '../Global.mjs';
import { Getter } from '../Accessor/index.mjs';

export const apply = Getter.apply(Reflect);
export const construct = Getter.construct(Reflect);
export const defineProperty = Getter.defineProperty(Reflect);
export const deleteProperty = Getter.deleteProperty(Reflect);
export const get = Getter.get(Reflect);
export const getOwnPropertyDescriptor = Getter.getOwnPropertyDescriptor(Reflect);
export const getPrototypeOf = Getter.getPrototypeOf(Reflect);
export const has = Getter.has(Reflect);
export const isExtensible = Getter.isExtensible(Reflect);
export const ownKeys = Getter.ownKeys(Reflect);
export const preventExtensions = Getter.preventExtensions(Reflect);
export const set = Getter.set(Reflect);
export const setPrototypeOf = Getter.setPrototypeOf(Reflect);
