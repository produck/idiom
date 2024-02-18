export * as Generator from './Generator.mjs';
export * as Caller from './Caller.mjs';

import * as GetterSetter from './GetterSetter.mjs';
export { GetterSetter, GetterSetter as Getter };

import * as Global from '../Global.mjs';

/*@__NO_SIDE_EFFECTS__*/
export const Bind = (target, caller) => caller.bind(Global.undefined, target);

/*@__NO_SIDE_EFFECTS__*/
export const AsGetter = getterSetter => {
	return /*@__NO_SIDE_EFFECTS__*/object => getterSetter(object);
};
