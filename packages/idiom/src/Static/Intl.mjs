import { Intl } from '../Global.mjs';
import { Getter } from '../Accessor/index.mjs';

export const getCanonicalLocales = Getter.getCanonicalLocales(Intl);
export const supportedValuesOf = Getter.supportedValuesOf(Intl);
export const Collator = Getter.Collator(Intl);
export const DateTimeFormat = Getter.DateTimeFormat(Intl);
export const ListFormat = Getter.ListFormat(Intl);
export const NumberFormat = Getter.NumberFormat(Intl);
export const PluralRules = Getter.PluralRules(Intl);
export const RelativeTimeFormat = Getter.RelativeTimeFormat(Intl);
export const Segmenter = Getter.Segmenter(Intl);
