export const Getter = key => object => object[key];
export const Caller = key => (object, ...args) => object[key](...args);
export const GetterCaller = getter => (o, ...args) => getter(o).apply(o, args);
export const Constructor = Target => (...args) => new Target(...args);

export const GetterSetter = key => {
	const get = Getter(key);

	return (o, ...v) => v.length === 0 ? get(o) : o[key] = v[0];
};
