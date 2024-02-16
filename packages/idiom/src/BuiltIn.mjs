export * from './Global.mjs';

import * as Global from './Global.mjs';
import * as Object from './Static/Object.mjs';
import { Getter as Get } from './Accessor/index.mjs';

// Indexed collections
export const TypedArray = Object.getPrototypeOf(Global.Int8Array);

// Control abstraction objects
export const GeneratorFunction = Get.constructor(function* () {});
export const AsyncGeneratorFunction = Get.constructor(async function* () {});
export const AsyncFunction = Get.constructor(async () => {});
