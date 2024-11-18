export * from './Global.mjs';

import * as Global from './Global.mjs';

// Indexed collections
export const TypedArray = Object.getPrototypeOf(Global.Int8Array);

const Constructor = instance => instance.constructor;

// Control abstraction objects
export const GeneratorFunction = Constructor(function* () {});
export const AsyncGeneratorFunction = Constructor(async function* () {});
export const AsyncFunction = Constructor(async () => {});
