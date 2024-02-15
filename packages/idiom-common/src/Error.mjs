import { Throw, Global } from '@produck/idiom';

const {
	EvalError,
	RangeError,
	ReferenceError,
	SyntaxError,
	TypeError,
	URIError,
} = Global;

export const Thrower = Target => message => Throw(new Target(message));

export const ThrowError = Thrower(Error);
export const ThrowEvalError = Thrower(EvalError);
export const ThrowRangeError = Thrower(RangeError);
export const ThrowReferenceError = Thrower(ReferenceError);
export const ThrowSyntaxError = Thrower(SyntaxError);
export const ThrowTypeError = Thrower(TypeError);
export const ThrowURIError = Thrower(URIError);

export { ThrowError as Throw };

export const TypeErrorMessage = (role, expected) => {
	return `Invalid "${role}", one "${expected}" expected.`;
};

export const ThrowTemplatedTypeError = (role, expected) => {
	return ThrowTypeError(TypeErrorMessage(role, expected));
};
