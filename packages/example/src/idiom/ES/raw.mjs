import { ES } from '@produck/idiom';

export default {
	prev: ES.NULL,
	next: ES.NULL,
	isFinished: ES.FALSE,
	isNew: ES.FALSE,
	start() {
		this.isFinished = ES.TRUE;
		this.isNew = ES.TRUE;
	},
	isDate(value) {
		if (ES.TypeOf(value) !== 'number' || !ES.InstanceOf(Date)) {
			ES.Throw('Bad value.');
		}
	},
};
