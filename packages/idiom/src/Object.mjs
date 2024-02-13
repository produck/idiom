import { Object } from './Global.mjs';

// es5
export const getPrototypeOf = Object.getPrototypeOf;
export const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
export const getOwnPropertyNames = Object.getOwnPropertyNames;
export const create = Object.create;
export const defineProperty = Object.defineProperty;
export const defineProperties = Object.defineProperties;
export const seal = Object.seal;
export const freeze = Object.freeze;
export const preventExtensions = Object.preventExtensions;
export const isSealed = Object.isSealed;
export const isFrozen = Object.isFrozen;
export const isExtensible = Object.isExtensible;
export const keys = Object.keys;

// es2015
export const assign = Object.assign;
export const getOwnPropertySymbols = Object.getOwnPropertySymbols;
export const is = Object.is;
export const setPrototypeOf = Object.setPrototypeOf;

// es2017
export const values = Object.values;
export const entries = Object.entries;
export const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;

// es2019
export const fromEntries = Object.fromEntries;

// es2022
export const hasOwn = Object.hasOwn;

// es2024+
export const groupBy = Object.groupBy;
