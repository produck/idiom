import { New } from '@produck/idiom';

export default [
	New.Object(), New.Function('a', 'b', 'return a + b'), New.Boolean(true),
	New.Number(1), New.String('foo'), New.Error('bar'), New.AggregateError([]),
	New.EvalError('baz'), New.RangeError('qux'), New.ReferenceError('foo'),
	New.SyntaxError('bar'), New.TypeError('baz'), New.URIError('qux'),
	New.Date(0), New.RegExp('a'), New.Array(10), New.Map(), New.Set(),
	New.WeakMap(), New.WeakSet(), New.WeakRef({}),
	New.FinalizationRegistry(() => {}), New.ArrayBuffer(10),
	New.SharedArrayBuffer(10), New.DataView(New.ArrayBuffer(10)),
	New.Promise(() => {}), New.Proxy({}, {}), New.Int8Array(10),
	New.Uint8Array(10), New.Uint8ClampedArray(10), New.Int16Array(10),
	New.Uint16Array(10), New.Int32Array(10), New.Uint32Array(10),
	New.BigInt64Array(10), New.BigUint64Array(10), New.Float32Array(10),
	New.Float64Array(10),
];
