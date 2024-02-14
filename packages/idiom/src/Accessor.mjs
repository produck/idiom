export const Getter = key => object => object[key];
export const Setter = key => (object, value) => object[key] = value;
export const Caller = key => (object, ...args) => object[key](...args);
