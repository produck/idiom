import * as Ow from '@produck/ow';
import * as Is from '../Is/index.mjs';

export const Assert = (validator, _expected) => {
	return (value, role, expected = _expected) => {
		if (!Is.Type.String(role)) {
			Ow.Invalid('role', 'string');
		}

		if (!Is.Type.String(expected)) {
			Ow.Invalid('expected', 'string');
		}

		if (!validator(value)) {
			Ow.Invalid(role, expected);
		}
	};
};
