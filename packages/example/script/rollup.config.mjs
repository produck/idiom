import { builtinModules } from 'node:module';
import path from 'node:path';

import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const moduleList = [
	{
		output: path.resolve('dist/bundle.gen.cjs'),
		format: 'cjs',
		isExternal: true,
	},
	{
		output: path.resolve('dist/bundle.min.gen.cjs'),
		format: 'cjs',
		isExternal: true,
		isMin: true,
	},
	{
		output: path.resolve('dist/bundle.esm.gen.mjs'),
		format: 'esm',
		isExternal: true,
	},
	{
		output: path.resolve('dist/bundle.esm.min.gen.mjs'),
		format: 'esm',
		isExternal: true,
		isMin: true,
	},
];

export default moduleList.map(config => {
	const plugins = [
		nodeResolve({ preferBuiltins: false }),
	];

	if (config.isMin) {
		plugins.push(terser());
	}

	return defineConfig({
		input: path.resolve('test/Assert.spec.mjs'),
		treeshake: 'smallest',
		external: [
			'mocha',
			...builtinModules,
			...builtinModules.map(name => `node:${name}`),
		],
		output: {
			file: config.output,
			format: config.format,
			name: config.name,
			generatedCode: 'es2015',
		},
		plugins,
	});
});
