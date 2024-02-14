export * from './Global.mjs';

import * as Global from './Global.mjs';
import * as Object from './Object.mjs';
import * as Accessor from './Accessor.mjs';

// Indexed collections
export const TypedArray = Object.getPrototypeOf(Global.Int8Array);

const getConstructor = Accessor.Getter('constructor');

// Control abstraction objects
export const GeneratorFunction = getConstructor(function* () {});
export const AsyncGeneratorFunction = getConstructor(async function* () {});
export const AsyncFunction = getConstructor(async function () {});
