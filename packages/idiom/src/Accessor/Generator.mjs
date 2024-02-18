/*@__NO_SIDE_EFFECTS__*/
export const Constructor = Target => {
	return /*@__NO_SIDE_EFFECTS__*/(...args) => new Target(...args);
};

/*@__NO_SIDE_EFFECTS__*/
export const GetterSetter = key => {
	/*@__NO_SIDE_EFFECTS__*/
	const fn = (o, ...v) => v.length === 0 ? o[key] : o[key] = v[0];

	fn.k = key;

	return fn;
};

/*@__NO_SIDE_EFFECTS__*/
export const Caller = ({ k }) => {
	return /*@__NO_SIDE_EFFECTS__*/(o, ...args) => o[k](...args);
};
