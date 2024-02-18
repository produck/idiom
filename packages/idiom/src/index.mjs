import * as Global from './Global.mjs';
export { Global, Global as G };

import * as BuiltIn from './BuiltIn.mjs';
export { BuiltIn, BuiltIn as B };

import * as Static from './Static/index.mjs';
export { Static, Static as S };

import * as Instance from './Instance/index.mjs';
export { Instance, Instance as I };

export * as New from './New.mjs';
export * as Accessor from './Accessor/index.mjs';
export * from './ES.mjs';

export const AsGetter = getterSetter => object => getterSetter(object);
