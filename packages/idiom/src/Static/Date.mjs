import { Date } from '../Global.mjs';
import { Getter } from '../Accessor/index.mjs';

export const now = Getter.now(Date);
export const parse = Getter.parse(Date);
export const UTC = Getter.UTC(Date);
