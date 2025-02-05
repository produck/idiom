import * as Ow from '@produck/ow';
import * as Is from './Is/index.mjs';

export const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));
export const toUndefined = () => {};
export const toTrue = () => true;
export const toFalse = () => false;
export const toNull = () => null;
export const passThrough = any => any;

export const orNull = (value) => Is.Type.Undefined(value) ? null : value;
export const toBoolean = (isTrue) => value => isTrue(value) ? true : false;

export {
	toTrue as ALWAYS_TRUE,
	toFalse as ALWAYS_FALSE,
	toUndefined as noop,
};

// String
export const capitalize = () => {

}

// Array
export const CALL = item => item();
export const isEmpty = array => array.length === 0;


export const SORT_BY = {
	LOCALE_COMPARE: (a, b) => a.localeCompare(b),
	LOCALE_COMPARE_WITH_GETTER: getter => (a, b) => getter(a).localeCompare(getter(b)),
};

const PROPERTY_SHOULD = [
	Is.Type.Number,
	Is.Type.String,
	Is.Type.Symbol,
];

const isProperty = any => PROPERTY_SHOULD.some(item => item(any));

function assertProperty(any) {
}

export function PropertyGetter(name) {


}

// Promise
export const THEN_TRUE_OR_FALSE = Object.freeze([toTrue, toFalse]);
export { toUndefined as IGNORE_CATCH };

// Constructor
const tokens = new WeakSet();

export function NewFromStaticToken() {
	const token = {};

	tokens.add(token);

	return token;
}

export function isValid(token) {
	return tokens.has(token);
}
