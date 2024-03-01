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
			{ text: 'Guide', link: '/guide/what-is-idiom' },
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
			},
			'/guide/': {
				base: '/guide',
				items: [{
					text: 'Introduction',
					collapsed: false,
					items: [
						{ text: 'What is Idiom?', link: '/what-is-idiom' },
						{ text: 'Getting Started', link: '/getting-started' },
					]
				}, {
					text: 'Namespaces',
					collapsed: false,
					items: [
						{ text: 'ES', link: '/what-is-idio' },
						{ text: 'Global', link: '/what-is-idio' },
						{ text: 'BuiltIn', link: '/what-is-idio' },
						{ text: 'Static', link: '/what-is-idio' },
						{ text: 'Instance', link: '/what-is-idio' },
						{ text: 'New', link: '/what-is-idio' },
						{ text: 'Accessor', link: '/what-is-idio' },
						{ text: 'Some Utilities', link: '/what-is-idio' },
					]
				}, {
					text: 'Customization',
					collapsed: false,
					items: [
						{ text: 'Accessor' },
						{ text: 'Caller' },
						{ text: 'Accessor Generator' },
					]
				}, {
					text: 'Destructuring or Not?',
					link: '/destructuring-or-not'
				}, {
					text: 'About Side Effects'
				}, {
					text: 'Why manual?'
				}]
			},
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/produck/idiom' }
		],
		externalLinkIcon: true,
    search: {
      provider: 'local'
    },
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
