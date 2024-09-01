import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NutriActive',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Descripción',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'NutriActive', link: '/guides/example/' },
					],
				},
				{
					label: 'Introducción',
					autogenerate: { directory: 'reference' },
				},
				{
						label: 'Interfaz',
						autogenerate: { directory: 'Interfaz' },
				},
			],
		}),
	],
});
