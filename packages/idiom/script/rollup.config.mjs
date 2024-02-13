import { createRequire } from 'node:module';
import path from 'node:path';

import { defineConfig } from 'rollup';
import terser from '@rollup/plugin-terser';

const require = createRequire(import.meta.url);
const meta = require('../package.json');

const BANNER =
	'/*!\n' +
	` * ${meta.name} v${meta.version}\n` +
	` * (c) 2023-${new Date().getFullYear()} ${meta.author}\n` +
	` * Released under the ${meta.license} License.\n` +
	' */';

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
];

export default moduleList.map(config => {
	const plugins = [];

	if (config.isMin) {
		plugins.push(terser());
	}

	return defineConfig({
		input: path.resolve('example/origin.ign.mjs'),
		output: {
			file: config.output,
			format: config.format,
			name: config.name,
			banner: BANNER,
			generatedCode: 'es2015',
		},
		plugins,
	});
});
