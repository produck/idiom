import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "Idiom（土语）",
	titleTemplate: ':title - Produck',
	description: "@produck/idiom的文档",
	cleanUrls: true,
	lastUpdated: true,

	themeConfig: {
		nav: [
			{ text: '指南', link: '/zh/guide/what-is-idiom' },
			{ text: 'API 参考', link: '/api' },
			{ text: '示例', link: '/zh/examples/statement' },
			{ text: 'Produck工作台', link: 'https://produckjs.com/zh/' }
		],
		sidebar: {
			'/zh/examples/': {
				base: '/zh/examples',
				items: [
					{ text: 'ECMAScript 语句', link: '/statement' },
					{ text: 'new 构造函数', link: '/new' }
				]
			},
			'/zh/guide/': {
				base: '/zh/guide',
				items: [{
					text: '简介',
					collapsed: false,
					items: [
						{ text: '什么是 Idiom？', link: '/what-is-idiom' },
						{ text: '快速开始', link: '/getting-started' },
					]
				}, {
					text: '命名空间',
					collapsed: false,
					items: [
						{ text: 'ES', link: '/what-is-idio' },
						{ text: 'Global', link: '/what-is-idio' },
						{ text: 'BuiltIn', link: '/what-is-idio' },
						{ text: 'Static', link: '/what-is-idio' },
						{ text: 'Instance', link: '/what-is-idio' },
						{ text: 'New', link: '/what-is-idio' },
						{ text: 'Accessor', link: '/what-is-idio' },
						{ text: '实用工具', link: '/what-is-idio' },
					]
				}, {
					text: '定义土语',
					collapsed: false,
					items: [
						{ text: '访问器' },
						{ text: '调用器' },
						{ text: '使用访问器生成器' },
					]
				}, {
					text: '关于副作用'
				}, {
					text: '为何人工处理？'
				}]
			},
		},
		docFooter: {
			prev: '上一章',
			next: '下一章'
		},
		outline: {
			label: '页面导航'
		},
		lastUpdated: {
			text: '最后更新于',
		},
		footer: {
			message: '基于 MIT 协议发布',
			copyright: `Copyright © 2023-${new Date().getFullYear()} Produck团队`
		},
		editLink: {
			pattern: 'https://github.com/produck/idiom/edit/main/docs/:path',
			text: '在GitHub上编辑'
		},
	}
});
