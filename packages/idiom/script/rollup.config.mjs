import path from 'node:path';

import { defineConfig } from 'rollup';
import terser from '@rollup/plugin-terser';

const moduleList = [
	{
		output: path.resolve('example/bundle.gen.cjs'),
		format: 'cjs',
		isExternal: true,
	},
	{
		output: path.resolve('example/bundle.min.gen.cjs'),
		format: 'cjs',
		isExternal: true,
		isMin: true,
	},
	{
		output: path.resolve('example/bundle.esm.gen.mjs'),
		format: 'esm',
		isExternal: true,
	},
	{
		output: path.resolve('example/bundle.esm.min.gen.mjs'),
		format: 'esm',
		isExternal: true,
		isMin: true,
	},
];

export default moduleList.map(config => {
	const plugins = [];

	if (config.isMin) {
		plugins.push(terser());
	}

	return defineConfig({
		input: path.resolve('example/origin.ign.mjs'),
		treeshake: 'smallest',
		output: {
			file: config.output,
			format: config.format,
			name: config.name,
			generatedCode: 'es2015',
		},
		plugins,
	});
});
