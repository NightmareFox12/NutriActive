import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'NutriActive',
      favicon: '/favicon.svg',
      sidebar: [
        {
          label: 'Descripción',
          items: [
            { label: 'NutriActive', link: '/guides/example/' },
          ],
        },
        {
          label: 'Introducción',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Aplicación Móvil',
          autogenerate: { directory: 'Interfaz' },
        },
      ],
      customCss: ['/src/global.css'],
    }),
  ],
});
