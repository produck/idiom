import { JSON } from '../Global.mjs';
import { Getter } from '../Accessor/index.mjs';

export const parse = Getter.parse(JSON);
export const stringify = Getter.stringify(JSON);
