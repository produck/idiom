import * as Global from './Static';
export { Global, Global as G };

import * as BuiltIn from './BuiltIn';
export { BuiltIn, BuiltIn as B };

import * as Static from './Static';
export { Static, Static as S };

import * as Instance from './Instance';
export { Instance, Instance as I };

export * as Accessor from './Accessor';
export * as New from './New';
export * from './ES';

import { GetterSetter } from './Accessor';

type Getter = <T extends object>(o: T) => T[keyof T];
export function AsGetter(getterSetter: GetterSetter): Getter;
