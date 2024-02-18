import { ES, New } from '@produck/idiom';

export const Thrower = New => message => ES.Throw(New(message));

export const ThrowError = Thrower(New.Error);
export const ThrowEvalError = Thrower(New.EvalError);
export const ThrowRangeError = Thrower(New.RangeError);
export const ThrowReferenceError = Thrower(New.ReferenceError);
export const ThrowSyntaxError = Thrower(New.SyntaxError);
export const ThrowTypeError = Thrower(New.TypeError);
export const ThrowURIError = Thrower(New.URIError);

export { ThrowError as Throw };

export const TypeErrorMessage = (role, expected) => {
	return `Invalid "${role}", one "${expected}" expected.`;
};

export const ThrowTemplatedTypeError = (role, expected) => {
	return ThrowTypeError(TypeErrorMessage(role, expected));
};
