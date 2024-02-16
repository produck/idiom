export * as Generator from './Generator.mjs';
export * as Caller from './Caller.mjs';

import * as GetterSetter from './GetterSetter.mjs';
export { GetterSetter, GetterSetter as Getter };

import * as Global from '../Global.mjs';

export const Bind = (target, caller) => caller.bind(Global.undefined, target);
