import { ArrayBuffer } from '../Global.mjs';
import { Getter } from '../Accessor/index.mjs';

export const isView = Getter.isView(ArrayBuffer);
