import { Getter } from './Generator.mjs';

export const abs = Getter('abs');
export const acos = Getter('acos');
export const acosh = Getter('acosh');
export const add = Getter('add');
export const all = Getter('all');
export const allSettled = Getter('allSettled');
export const and = Getter('and');
export const any = Getter('any');
export const apply = Getter('apply');
export const asIntN = Getter('asIntN');
export const asin = Getter('asin');
export const asinh = Getter('asinh');
export const assign = Getter('assign');
export const asyncIterator = Getter('asyncIterator');
export const atan = Getter('atan');
export const atan2 = Getter('atan2');
export const atanh = Getter('atanh');
export const asUintN = Getter('asUintN');

export const BYTES_PER_ELEMENT = Getter('BYTES_PER_ELEMENT');

export const Collator = Getter('Collator');
export const cbrt = Getter('cbrt');
export const ceil = Getter('ceil');
export const clz32 = Getter('clz32');
export const compareExchange = Getter('compareExchange');
export const construct = Getter('construct');
export const constructor = Getter('constuctor');
export const cos = Getter('cos');
export const cosh = Getter('cosh');
export const create = Getter('create');

export const DateTimeFormat = Getter('DateTimeFormat');
export const defineProperties = Getter('defineProperties');
export const defineProperty = Getter('defineProperty');
export const deleteProperty = Getter('deleteProperty');

export const E = Getter('E');
export const EPSILON = Getter('EPSILON');
export const entries = Getter('entries');
export const exp = Getter('exp');
export const expm1 = Getter('expm1');

export const floor = Getter('floor');
export const freeze = Getter('freeze');
export const from = Getter('from');
export const fromAsync = Getter('fromAsync');
export const fromCharCode = Getter('fromCharCode');
export const fromCodePoint = Getter('fromCodePoint');
export const fromEntries = Getter('fromEntries');
export const fround = Getter('fround');

export const get = Getter('get');
export const getCanonicalLocales = Getter('getCanonicalLocales');
export const getOwnPropertyDescriptor = Getter('getOwnPropertyDescriptor');
export const getOwnPropertyDescriptors = Getter('getOwnPropertyDescriptors');
export const getOwnPropertyNames = Getter('getOwnPropertyNames');
export const getOwnPropertySymbols = Getter('getOwnPropertySymbols');
export const getPrototypeOf = Getter('getPrototypeOf');
export const groupBy = Getter('groupBy');

export const has = Getter('has');
export const hasInstance = Getter('hasInstance');
export const hasOwn = Getter('hasOwn');
export const hypot = Getter('hypot');

export const imul = Getter('imul');
export const is = Getter('is');
export const isArray = Getter('isArray');
export const isConcatSpreadable = Getter('isConcatSpreadable');
export const isExtensible = Getter('isExtensible');
export const isFrozen = Getter('isFrozen');
export const isInteger = Getter('isInteger');
export const isLockFree = Getter('isLockFree');
export const isSafeInteger = Getter('isSafeInteger');
export const isSealed = Getter('isSealed');
export const isView = Getter('isView');
export const iterator = Getter('iterator');

export const keyFor = Getter('keyFor');
export const keys = Getter('keys');

export const ListFormat = Getter('ListFormat');
export const LN10 = Getter('LN10');
export const LN2 = Getter('LN2');
export const LOG10E = Getter('LOG10E');
export const LOG2E = Getter('LOG2E');
export const load = Getter('load');
export const log = Getter('log');
export const log10 = Getter('log10');
export const log1p = Getter('log1p');
export const log2 = Getter('log2');

export const MAX_SAFE_INTEGER = Getter('MAX_SAFE_INTEGER');
export const MAX_VALUE = Getter('MAX_VALUE');
export const MIN_SAFE_INTEGER = Getter('MIN_SAFE_INTEGER');
export const MIN_VALUE = Getter('MIN_VALUE');
export const match = Getter('match');
export const matchAll = Getter('matchAll');
export const max = Getter('max');
export const min = Getter('min');

export const NEGATIVE_INFINITY = Getter('NEGATIVE_INFINITY');
export const NumberFormat = Getter('NumberFormat');
export const notify = Getter('notify');
export const now = Getter('now');

export const of = Getter('of');
export const or = Getter('or');
export const ownKeys = Getter('ownKeys');

export const PI = Getter('PI');
export const PluralRules = Getter('PluralRules');
export const POSITIVE_INFINITY = Getter('POSITIVE_INFINITY');
export const parse = Getter('parse');
export const pow = Getter('pow');
export const preventExtensions = Getter('preventExtensions');
export const prototype = Getter('prototype');

export const RelativeTimeFormat = Getter('RelativeTimeFormat');
export const race = Getter('race');
export const random = Getter('random');
export const raw = Getter('raw');
export const reject = Getter('reject');
export const replace = Getter('replace');
export const resolve = Getter('resolve');
export const revocable = Getter('revocable');
export const round = Getter('round');

export const SQRT1_2 = Getter('SQRT1_2');
export const SQRT2 = Getter('SQRT2');
export const Segmenter = Getter('Segmenter');
export const seal = Getter('seal');
export const search = Getter('search');
export const set = Getter('set');
export const setPrototypeOf = Getter('setPrototypeOf');
export const sign = Getter('sign');
export const sin = Getter('sin');
export const sinh = Getter('sinh');
export const split = Getter('split');
export const species = Getter('species');
export const sqrt = Getter('sqrt');
export const store = Getter('store');
export const stringify = Getter('stringify');
export const supportedValuesOf = Getter('supportedValuesOf');
export const sub = Getter('sub');

export const tan = Getter('tan');
export const tanh = Getter('tanh');
export const toPrimitive = Getter('toPrimitive');
export const toStringTag = Getter('toStringTag');
export const trunc = Getter('trunc');

export const UTC = Getter('UTC');
export const unscopables = Getter('unscopables');

export const values = Getter('values');

export const wait = Getter('wait');
export const waitAsync = Getter('waitAsync');
export const withResolvers = Getter('withResolvers');

export const xor = Getter('xor');

// reserved words
const _for = Getter('for');

export { _for as for };
