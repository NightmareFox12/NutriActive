import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      head: [
        {
          tag: 'meta',
          attrs: [
            {
              name: 'description',
            },
          ],
          content: 'Aplicación NutriActive, controla tus hábitos saludables y mira recetas entre',
        },
      ],
      title: 'NutriActive',
      favicon: '/favicon.svg',
      sidebar: [
        {
          label: 'Descripción',
          items: [{ label: 'NutriActive', link: '/guides/example/' }],
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
