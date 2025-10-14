import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'description',
            content:
              'Aplicación NutriActive, controla tus hábitos saludables y mira recetas entre',
          },
        },
        {
          tag: 'meta',
          attrs: { name: 'keywords', content: 'NutriActive,Apk' },
        },
        {
          tag: 'meta',
          attrs: { name: 'author', content: 'NightmareFox12' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
          },
        },
        {
          tag: 'script',
          attrs: {
            src: '/theme-sync.js',
            type: 'module',
          },
        }

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
