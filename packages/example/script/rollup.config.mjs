import { builtinModules } from 'node:module';
import path from 'node:path';

import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const FORMATS = {
	cjs: '.cjs',
	esm: '.mjs',
};

const moduleList = [
	'no-destructuring',
	'destructuring',
	'es-statement',
	'new-constructor',
	'simple',
];

const configList = [];

for (const input of moduleList) {
	const inputPathname = path.resolve('src', input, 'raw.mjs');
	const dirname = path.dirname(inputPathname);

	const base = defineConfig({
		input: inputPathname,
		treeshake: 'smallest',
		external: [
			...builtinModules,
			...builtinModules.map(name => `node:${name}`),
		],
		output: {
			generatedCode: 'es2015',
		},
		plugins: [
			nodeResolve({ preferBuiltins: false }),
		],
	});

	for (const format in FORMATS) {
		const ext = FORMATS[format];

		for (const isMin of [true, false]) {
			const plugins = [];

			if (isMin) {
				plugins.push(terser());
			}

			configList.push({
				...base,
				output: {
					...base.output,
					file: path.join(dirname, `${isMin ? '.min' : ''}.gen${ext}`),
					format,
				},
				plugins: [
					...base.plugins,
					...plugins,
				],
			});
		}
	}
}

export default configList;
