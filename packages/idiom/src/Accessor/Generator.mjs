export const Caller = key => (object, ...args) => object[key](...args);
export const GetterCaller = getter => (o, ...args) => getter(o).apply(o, args);
export const Constructor = Target => (...args) => new Target(...args);

export const GetterSetter = key => {
	/*@__NO_SIDE_EFFECTS__*/
	const fn = (o, ...v) => v.length === 0 ? o[key] : o[key] = v[0];

	return fn;
};
