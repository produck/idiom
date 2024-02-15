import { Caller, GetterCaller } from './Generator.mjs';
import * as Getter from './Getter.mjs';

export const from = GetterCaller(Getter.from);
export const of = GetterCaller(Getter.of);
