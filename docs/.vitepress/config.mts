import { defineConfig } from 'vitepress'
import zh from './locales/zh.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Idiom",
	titleTemplate: ':title - Produck',
	description: "Documentation of @produck/idiom",
	cleanUrls: true,
	lastUpdated: true,

	sitemap: {
		hostname: 'https://idiom.produckjs.com'
	},

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Guide', link: '/guide' },
			{ text: 'API Reference', link: '/api' },
			{ text: 'Examples', link: '/examples/statement' },
			{ text: 'Produck', link: 'https://produckjs.com' }
		],
		sidebar: {
			'/examples/': {
				base: '/examples',
				items: [
					{ text: 'ECMAScript Statement', link: '/statement' },
					{ text: 'new Constructor', link: '/new' }
				]
			}
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
		],
		externalLinkIcon: true,
	},

	locales: {
		root: {
			label: 'English',
			lang: 'en'
		},
		zh: {
			label: '简体中文',
			lang: 'zh',
			link: '/zh/',
			...zh,
		}
	}
})
