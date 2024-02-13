export * from './Global.mjs';

import * as Global from './Global.mjs';
import * as Object from './Object.mjs';

// Indexed collections
export const TypedArray = Object.getPrototypeOf(Global.Int8Array);

// Control abstraction objects
export const GeneratorFunction = function* () {}.constructor;
export const AsyncGeneratorFunction = async function* () {}.constructor;
export const AsyncFunction = async function () {}.constructor;
