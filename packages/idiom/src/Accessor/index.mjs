export * as Generator from './Generator.mjs';
export * as Caller from './Caller.mjs';
export * as Getter from './Getter.mjs';
export * as GetterSetter from './GetterSetter.mjs';

import * as Global from '../Global.mjs';

export const Bind = (target, caller) => caller.bind(Global.undefined, target);
